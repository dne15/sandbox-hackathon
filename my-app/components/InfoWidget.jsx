import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function InfoWidget ({ title, data, icon }) {
    return (
        <View style={styles.widget}>
            <Text style={styles.icon}>{icon}</Text>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.data}>{data}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    widget: {
        alignItems: 'center',
        backgroundColor: '#E2F4E2', // Very light green
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
        fontSize: 20,
        color: '#4CAF50',
        marginBottom: 5,
    },
    title: {
        fontSize: 10,
        color: '#A8BFA4', // Subtle grayish green
        fontFamily: 'Poppins-Light',
        textAlign: 'center',
        marginBottom: 3,
    },
    data: {
        fontSize: 14,
        fontWeight: '600',
        color: '#2C6D4B', // Deeper green
        fontFamily: 'Poppins',
        textAlign: 'center',
    }
});