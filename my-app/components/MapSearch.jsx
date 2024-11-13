import { useState, useEffect } from "react";
import { StyleSheet, View, TextInput, TouchableOpacity, Text, FlatList } from "react-native";

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
            <View style={styles.form}>
                <TextInput
                    onChangeText={handleTyping}
                    value={input}
                    style={styles.bar}
                    placeholder="Where are ya?"
                    placeholderTextColor={"#F2F4F8"}
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
        height: 50,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#0B6F5D",
    },
    form: {
        flexDirection: "row",
        alignItems: "center"
    },
    bar: {
        backgroundColor: "#e07a5f",
        width: 250,
        height: 25,
        borderRadius: 25,
        paddingLeft: 10,
        color: "#F2F4F8",
    },
    button: {
        marginLeft: 10,
        paddingVertical: 5,
        paddingHorizontal: 15,
        borderRadius: 25,
        backgroundColor: "#e07a5f",
        justifyContent: "center",
        alignItems: "center"
    },
    buttonText: {
        color: "#F2F4F8",
        fontSize: 16,
    },
    suggestionsContainer: {
        position: "absolute",
        top: 50,
        width: "100%",
        backgroundColor: "#fff",
        zIndex: 1,
    },
    suggestion: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#ccc",
    },
});