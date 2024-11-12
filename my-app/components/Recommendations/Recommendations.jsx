import CarbonRecs from './CarbonRecs'
import PollutionRecs from './PollutionRecs'
import WeatherApi from '../Api/WeatherApi';
import WeatherRecs from './WeatherRecs';
import { useState } from "react";
import { View } from "react-native";

function Recommendations({ weatherData, carbonIntensity, airRecommendation, airQuality }) {

   return (
   
   <>
    <CarbonRecs carbonIntensity={carbonIntensity} />
    <PollutionRecs airRecommendation={airRecommendation} airQuality={airQuality} />
    <View>
      {weatherData && <WeatherRecs weather={weatherData} />}
    </View>
    </>
   )
    
}

export default Recommendations;