import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function InfoWidget ({ title, data, icon }) {

    return (
        <View style={styles.widget}>
            <Text>{icon}</Text>
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
        textAlign: "center",
        fontWeight: "bold",
        fontSize: "13px",
        marginTop: "2%",
        color: "#F2F4F8"
    },
    data: {
        marginTop: "5%",
        textAlign: "center",
        color: "#F2F4F8"
    }
  });