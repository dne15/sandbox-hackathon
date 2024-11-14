import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
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
  const navigation = useNavigation();
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

  const handleGenerateRecommendations = () => {
    navigation.navigate('Recommendations', {
      weatherData,
      carbonIntensity,
      airRecommendation: recommendation,
      airQuality: airQualityData
    });
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={styles.scrollContainer} contentContainerStyle={styles.body}>
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
        <GenerateButton onPress={handleGenerateRecommendations} />

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
    flex: 1,
    backgroundColor: "#F2F4F8",
  },
  body: {
    padding: 10,
    alignItems: 'center',
  },
});
