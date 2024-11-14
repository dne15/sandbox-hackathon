import React from 'react';
import { View, StyleSheet } from 'react-native';
import InfoWidget from './InfoWidget'

export default function InfoWidgetContainer ({ weatherData, airQualityData, carbonIntensity }) {
    return (
        <View style={styles.container}>
            <InfoWidget 
                iconName="sunny-outline" 
                title="Weather" 
                data={weatherData ? weatherData.description : ''}
            />
            <InfoWidget 
                iconName="thermometer-outline" 
                title="Temp" 
                data={weatherData ? `${weatherData.temperature}ºC` : ''}
            />
            <InfoWidget 
                iconName="leaf-outline" 
                title="Air" 
                data={airQualityData ? airQualityData.indexes[0].category : ''}
            />
            <InfoWidget 
                iconName="cloud-outline" 
                title="Carbon" 
                data={carbonIntensity ? carbonIntensity : ''}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        width: "100%",
        minHeight: "12.5%",
        padding: "1.25%",
    },
});