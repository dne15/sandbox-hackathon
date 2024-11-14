import { useState, useEffect } from "react";
import { StyleSheet, View, TextInput, TouchableOpacity, Text, FlatList } from "react-native";
import { Ionicons } from '@expo/vector-icons'; // Make sure to install @expo/vector-icons

export default function MapSearch({ onTyping, onSubmit }) {
    const [input, setInput] = useState("");
    const [suggestions, setSuggestions] = useState([]);

    useEffect(() => {
        if (input.length > 2) {
            fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${input}&key=AIzaSyAK1ZeCXUAEmQ4ugUfhi4K1i-8lYY4QEmg`)
                .then(response => response.json())
                .then(data => {
                    const results = data.results.map(result => ({
                        name: result.formatted_address,
                        location: result.geometry.location
                    }));
                    setSuggestions(results);
                })
                .catch(error => console.error('Error fetching geolocation data:', error));
        } else {
            setSuggestions([]);
        }
    }, [input]);

    const handleTyping = (text) => {
        setInput(text);
        onTyping(text);
    };

    const handleSuggestionClick = (suggestion) => {
        setInput(suggestion.name);
        setSuggestions([]);
        onTyping(suggestion.name);
        onSubmit();
        setInput("")
    };

    return (
        <View style={styles.container}>
            {/* <Ionicons name="leaf-outline" size={24} color="#4CAF50" style={styles.icon} /> */}
            <View style={styles.searchContainer}>
                <Ionicons name="search" size={20} color="#4CAF50" style={styles.searchIcon} />
                <TextInput
                    onChangeText={handleTyping}
                    value={input}
                    style={styles.searchInput}
                    placeholder="Where are you?"
                    placeholderTextColor="#A8BFA4"
                />
                <TouchableOpacity style={styles.button} onPress={onSubmit}>
                    <Text style={styles.buttonText}>Search</Text>
                </TouchableOpacity>
            </View>
            {suggestions.length > 0 && (
                <FlatList
                    data={suggestions}
                    keyExtractor={(item) => item.name}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => handleSuggestionClick(item)}>
                            <Text style={styles.suggestion}>{item.name}</Text>
                        </TouchableOpacity>
                    )}
                    style={styles.suggestionsContainer}
                />
            )}
        </View>
    
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        paddingVertical: 15,
        paddingHorizontal: 20,
        backgroundColor: '#E7F6E7',
        borderBottomWidth: 1,
        borderBottomColor: '#A8D3A3',
        shadowColor: '#82B27C',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
        // flexDirection: 'row',
        // alignItems: 'center',
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F1FDF4',
        borderRadius: 25,
        paddingHorizontal: 15,
        height: 50,
        // flex: 1,
    },

    searchIcon: {
        marginRight: 10,
    },
    searchInput: {
        flex: 1,
        height: '100%',
        color: '#3C763D',
        fontFamily: 'Poppins-Regular',
        fontSize: 16,
    },
    button: {
        backgroundColor: '#4CAF50',
        paddingVertical: 8,
        paddingHorizontal: 15,
        borderRadius: 20,
        marginLeft: 10,
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontFamily: 'Poppins-Bold',
    },
    suggestionsContainer: {
        backgroundColor: '#F1FDF4',
        borderRadius: 10,
        marginTop: 5,
        maxHeight: 200,
    },
    suggestion: {
        padding: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#D1E5D0',
        color: '#3C763D',
        fontFamily: 'Poppins-Regular',
    },
});