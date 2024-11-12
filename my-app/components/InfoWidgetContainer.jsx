import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import InfoWidget from './InfoWidget'


export default function InfoWidgetContainer ({ weatherData, airQualityData, carbonIntensity }) {
    return (
        <View style={styles.container}>
          <InfoWidget title="Weather" data={weatherData ? weatherData.description : ''}></InfoWidget>
          <InfoWidget title="Temp" data={weatherData ? `${weatherData.temperature}ºC` : ''}></InfoWidget>
          <InfoWidget title="Air Quality" data={airQualityData ? airQualityData.indexes[0].category : ''}></InfoWidget>
          <InfoWidget title="Carbon Intensity" data={carbonIntensity ? carbonIntensity : ''}></InfoWidget>
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
        minHeight: "12.5%",
    } 
  });