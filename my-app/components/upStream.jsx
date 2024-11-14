import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Header from './Header';
import InfoWidgetContainer from './InfoWidgetContainer';
import MapSearch from './MapSearch';
import GenerateButton from './GenerateButton';
import WeatherApi from './Api/WeatherApi';
import CarbonApi from './Api/CarbonApi';
import MapApi from './Api/MapApi';
import PollutionApi from './Api/PollutionApi';
import Recommendations from './Recommendations/Recommendations';

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
        latitudeDelta: 0.2,
        longitudeDelta: 0.2,
      });
    }
  }, [weatherData]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* Search Component (renders suggestions separately) */}
      <MapSearch onTyping={handleTyping} onSubmit={handleSubmit} />

      <ScrollView style={styles.scrollContainer} contentContainerStyle={styles.body}>
        <Header />
        <InfoWidgetContainer weatherData={weatherData} airQualityData={airQualityData} carbonIntensity={carbonIntensity} />
        <MapApi region={region} />
        <Recommendations  
          weatherData={weatherData} 
          carbonIntensity={carbonIntensity}
          airRecommendation={recommendation}
          airQuality={airQualityData}
        />
        <GenerateButton onPress={() => {/* Your navigation or recommendation function */}} />

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
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    backgroundColor: "#F2F4F8",
  },
  body: {
    padding: 10,
    alignItems: 'center',
  },
});
