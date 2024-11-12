import Header from './Header';
import InfoWidgetContainer from './InfoWidgetContainer';
import MapSearch from './MapSearch';
import GenerateButton from './GenerateButton';
import WeatherApi from './Api/WeatherApi';
import CarbonApi from './Api/CarbonApi';
import MapApi from './Api/MapApi';
import PollutionApi from './Api/PollutionApi';
import Recommendations from './Recommendations/Recommendations';

import { useState } from 'react';
import { View } from 'react-native';

export default function UpStream() {

const [cityInput, setCityInput] = useState("");
const [cityName, setCityName] = useState("");
const [weatherData, setWeatherData] = useState(null);
const [airQualityData, setAirQualityData] = useState(null);
const [carbonIntensity, setCarbonIntensity] = useState(null);
const [recommendation, setRecommendation] = useState(null);

  function handleTyping(text) {
    setCityInput(text);
  }

  function handleSubmit() {
    setCityName(cityInput);
  }

  return(
    <View>
        <Header /> 
        <MapSearch onTyping={handleTyping} onSubmit={handleSubmit} />
        <InfoWidgetContainer weatherData={weatherData} airQualityData={airQualityData} carbonIntensity={carbonIntensity} />
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
        <MapApi />
        <Recommendations  
          weatherData={weatherData} 
          carbonIntensity={carbonIntensity}
          airRecommendation={recommendation}
          airQuality={airQualityData}
        />
        <GenerateButton />
    </View>
  )
}