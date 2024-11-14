import React from 'react';
import CarbonRecs from './CarbonRecs';
import PollutionRecs from './PollutionRecs';
import WeatherRecs from './WeatherRecs';
import { View, StyleSheet } from "react-native";

function Recommendations({ weatherData, carbonIntensity, airRecommendation, airQuality }) {
   return (
     <View style={styles.container}>
       {carbonIntensity && <CarbonRecs carbonIntensity={carbonIntensity} />}
      {airQuality && <PollutionRecs airRecommendation={airRecommendation} airQuality={airQuality} />}
       {weatherData && <WeatherRecs weather={weatherData} />}
     </View>
   )
}

export default Recommendations;

const styles = StyleSheet.create({
  container: {
    padding: "2.5%",
    backgroundColor: '#E7F6E7',
    borderRadius: 15,
    shadowColor: "#3B6A4D",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  }
});