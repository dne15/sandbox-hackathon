import CarbonRecs from './CarbonRecs'
import PollutionRecs from './PollutionRecs'
import WeatherRecs from './WeatherRecs';

import { View, StyleSheet } from "react-native";

function Recommendations({ weatherData, carbonIntensity, airRecommendation, airQuality }) {

   return (
   <View style={styles.container}>
      <CarbonRecs carbonIntensity={carbonIntensity} />
      <PollutionRecs airRecommendation={airRecommendation} airQuality={airQuality} />
      {weatherData && 
        <WeatherRecs weather={weatherData} 
      />}
    </View>
   )
    
}

export default Recommendations;

const styles = StyleSheet.create({
  container: {
    padding: "2.5%"
  }
})
