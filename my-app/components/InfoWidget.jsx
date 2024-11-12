import React from 'react';
import { View, Text, StyleSheet } from 'react-native';



export default function InfoWidget ({ title, data }) {
    return (
        <View style={styles.widget}>
            <Text>🌲</Text>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.data}>{data}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    widget: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "25%",
    },
    title: {

    },
    data: {
        marginTop: "5%"
    }
  });