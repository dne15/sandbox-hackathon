import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function InfoWidget ({ title, data, icon }) {

    return (
        <View style={styles.widget}>
            {/* <Text>{icon}</Text> */}
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
        width: "23%",
        borderWidth: 1,
        borderColor: "#2f4858",
        borderRadius: 5
    },
    title: {
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 13,
        marginTop: "2%",
        color: "#2f4858"
    },
    data: {
        marginTop: "5%",
        textAlign: "center",
        color: "#2f4858"
    }
  });