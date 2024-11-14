import React from 'react';
import { View, StyleSheet } from 'react-native';
import InfoWidget from './InfoWidget'

export default function InfoWidgetContainer ({ weatherData, airQualityData, carbonIntensity }) {
    return (
        <View style={styles.container} >
            <InfoWidget 
                iconName="sunny-outline" 
                title="Weather" 
                data={weatherData ? weatherData.description : ''}
                color='#E2F4E2' 
            />
            <InfoWidget 
    iconName="thermometer-outline" 
    title="Temp" 
    data={weatherData ? `${weatherData.temperature}ºC` : ''} 
    color={
        weatherData
            ? weatherData.temperature < 10
                ? '#00BFFF' // Blue for cold
                : weatherData.temperature <= 25
                ? '#E2F4E2' // Green for normal
                : '#FF4500' // Red for hot
            : ''
    }
/>

            <InfoWidget 
                iconName="leaf-outline" 
                title="Air" 
                data={airQualityData ? airQualityData.indexes[0].category : ''}
                color={airQualityData.indexes[0].category === 'Poor air quality' ? '#dc7862' : airQualityData.indexes[0].category === 'Moderate air quality' ? '#FAC898' : '#E2F4E2'}
            />
            <InfoWidget 
                iconName="cloud-outline" 
                title="Carbon" 
                data={carbonIntensity ? carbonIntensity : ''}
                color={carbonIntensity === 'high' ? '#dc7862' : '#E2F4E2'}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        width: "100%",
        minHeight: "9%",
        padding: "1.25%",
    },
});