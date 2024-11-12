import CarbonRecs from './CarbonRecs'
import PollutionRecs from './PollutionRecs'
import WeatherApi from '../Api/WeatherApi';
import WeatherRecs from './WeatherRecs';
import { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

function Recommendations() {
    const [weatherData, setWeatherData] = useState(null);

   return (
   
   <>
    <CarbonRecs />
    <PollutionRecs />
        <View>
      <WeatherApi setWeather={setWeatherData} />
      {weatherData && <WeatherRecs weather={weatherData} />}
    </View>
    </>
   )
    
}

export default Recommendations;