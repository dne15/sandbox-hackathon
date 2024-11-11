import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


export default function InfoWidget () {
    return (
        <View style={styles.widget}>
        <Text>☁️</Text>
        <Text>Weather</Text>
        <Text>Sunny</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    widget: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "25%",
    }
  });