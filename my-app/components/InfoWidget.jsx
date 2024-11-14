import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function InfoWidget ({ title, data, iconName }) {
    return (
        <View style={styles.widget}>
            <Ionicons name={iconName} size={24} color="#4CAF50" style={styles.icon} />
            <View style={styles.textContainer}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.data}>{capitalize(data)}</Text>
            </View>
        </View>
    );
}

// Helper function to capitalize each word
const capitalize = (text) => {
    return text
        .split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
};

const styles = StyleSheet.create({
    widget: {
        flexDirection: 'row',         // Row layout for icon and text
        alignItems: 'center',
        backgroundColor: '#E2F4E2',
        padding: 12,
        borderRadius: 8,
        width: '23%',
        borderWidth: 0.5,
        borderColor: '#D1E5D0',
        shadowColor: '#A8D3A3',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.15,
        shadowRadius: 5,
        elevation: 2,
    },
    icon: {
        marginRight: 10,              // Spacing between icon and text
    },
    textContainer: {
        flex: 1,                      // Allows text to take remaining space
    },
    title: {
        fontSize: 10,
        color: '#A8BFA4',
        fontFamily: 'Poppins-Light',
        textAlign: 'left',
        marginBottom: 3,
    },
    data: {
        fontSize: 12,                // Reduced font size for better fit
        fontWeight: '600',
        color: '#2C6D4B',
        fontFamily: 'Poppins',
        textAlign: 'left',
        flexWrap: 'wrap',            // Allow text to wrap onto the next line
        maxWidth: '90%',             // Limit the width of the text container to prevent overflow
    }
});
