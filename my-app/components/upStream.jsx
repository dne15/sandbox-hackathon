import Header from './Header';
import InfoWidgetContainer from './InfoWidgetContainer';
import MapSearch from './MapSearch';
import GenerateButton from './GenerateButton';
import WeatherApi from './Api/WeatherApi';
import CarbonApi from './Api/CarbonApi';
import MapApi from './Api/MapApi';
import PollutionApi from './Api/PollutionApi';
import Recommendations from './Recommendations/Recommendations';

import { useState, useEffect } from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';

export default function UpStream() {

const [cityInput, setCityInput] = useState("");
const [cityName, setCityName] = useState("");
const [weatherData, setWeatherData] = useState(null);
const [airQualityData, setAirQualityData] = useState(null);
const [carbonIntensity, setCarbonIntensity] = useState(null);
const [recommendation, setRecommendation] = useState(null);
const [region, setRegion] = useState(null);

  function handleTyping(text) {
    setCityInput(text);
  }

  function handleSubmit() {
    setCityName(cityInput);
  }

  useEffect(() => {
    if (weatherData) {
      setRegion({
        latitude: weatherData.lat,
        longitude: weatherData.lon,
        latitudeDelta: 0.3,
        longitudeDelta: 0.3,
      });
    }
  }, [weatherData]);


  return(
    <>
      <View style={styles.body}>
        <Header /> 
        <MapSearch onTyping={handleTyping} onSubmit={handleSubmit} />
        <InfoWidgetContainer weatherData={weatherData} airQualityData={airQualityData} carbonIntensity={carbonIntensity} />
        <MapApi region={region} />
        <Recommendations  
          weatherData={weatherData} 
          carbonIntensity={carbonIntensity}
          airRecommendation={recommendation}
          airQuality={airQualityData}
        />
        <GenerateButton />
      </View>

      <WeatherApi cityName={cityName} setWeatherData={setWeatherData} />
        {weatherData && (
      <CarbonApi setCarbonIntensity={setCarbonIntensity} />
        )}
        {weatherData && (
      <PollutionApi
        latitude={weatherData.lat}
        longitude={weatherData.lon}
        setAirQualityData={setAirQualityData}
        setRecommendation={setRecommendation}
      />
        )}
    </>
  )
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: "#F2F4F8",
    height: "100%",
    overflow: "scroll"
  },
  
});