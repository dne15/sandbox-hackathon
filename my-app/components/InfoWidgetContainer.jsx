import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import InfoWidget from './InfoWidget'


export default function InfoWidgetContainer () {
    return (
        <View style={styles.container}>
          <InfoWidget></InfoWidget>
          <InfoWidget></InfoWidget>
          <InfoWidget></InfoWidget>
          <InfoWidget></InfoWidget>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        // alignItems: "center",
        justifyContent: "space-evenly",
        width: "100%",
        backgroundColor: "#81b29a",
        height: "75px",
    } 
  });