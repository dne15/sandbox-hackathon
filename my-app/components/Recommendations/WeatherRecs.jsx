import { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import WeatherApi from '../Api/WeatherApi';

function WeatherRecs() {
    const [weather, setWeather] = useState(null)
    const [temp, setTemp] = useState(null);
    const [recommendations, setRecommendations] = useState([]);

    const celsius = weather ? ((weather.main.temp - 273.15).toFixed(2)) : null;

    useEffect(() => {
        if (celsius !== null) {
            if (celsius > 30) {
                setTemp("veryHighTemp");
            } else if (celsius > 25) {
                setTemp("highTemp");
            } else if (celsius > 15) {
                setTemp("moderate");
            } else if (celsius > 10) {
                setTemp("lowTemp");
            } else {
                setTemp("veryLowTemp");
            }
        }
    }, [celsius]);

    useEffect(() => {
        if (weather && temp) {
          const recs = weatherRecommendation(weather.weather[0].description, temp);
          setRecommendations(recs);
        }
      }, [weather, temp]);
    
  
  const weatherRecommendation = (condition, tempCategory) => {
    let messages = [];
    switch (tempCategory) {
      case 'veryHighTemp': // above 30°C
        switch (condition) {
          case 'clear sky':
          case 'few clouds':
          case 'scattered clouds':
            messages = [
              "With clear skies, try natural ventilation by opening windows in the early morning or evening to cool your space.",
              "Temperatures are very high—drink plenty of water throughout the day to stay cool naturally without excessive AC.",
              "Enjoy the sunny weather with low-emission activities like walking or biking instead of driving short distances."
            ];
            break;
          case 'broken clouds':
          case 'shower rain':
          case 'thunderstorm':
            messages = [
              "It's warm and humid outside. Use fans where possible instead of AC to save on energy.",
              "With high temperatures and clouds, delay tasks like laundry until evening to avoid peak energy usage during hot hours."
            ];
            break;
          case 'snow':
          case 'mist':
            messages = [
              "Even though it's snowy, temperatures are unusually high. Try to lower the heating slightly to conserve energy."
            ];
            break;
          default:
            messages = ["No specific recommendations for this weather condition."];
        }
        break;
      case 'highTemp': // 25°C - 30°C
        switch (condition) {
          case 'clear sky':
          case 'few clouds':
          case 'scattered clouds':
          case 'overcast clouds':
            messages = [
              "It’s sunny and warm—close curtains during peak sun hours to keep your home cool without needing extra AC.",
              "With higher-than-average temperatures, try using a microwave or stovetop for cooking to minimize added heat."
            ];
            break;
          case 'broken clouds':
          case 'shower rain':
          case 'thunderstorm':
            messages = [
              "It’s a warm, overcast day. Turn off unnecessary electronics to reduce indoor heat and save energy."
            ];
            break;
          case 'rain':
          case 'mist':
            messages = [
              "Warm and rainy—try using public transport or carpooling to reduce emissions, especially when roads are wet."
            ];
            break;
          default:
            messages = ["No specific recommendations for this weather condition."];
        }
        break;
      case 'moderate': // 15°C - 25°C
        switch (condition) {
          case 'clear sky':
          case 'few clouds':
          case 'scattered clouds':
          case 'overcast clouds':
            messages = [
              "Moderate and pleasant weather—take advantage of the fresh air with a walk, run, or bike ride instead of using a car.",
              "With scattered clouds and moderate temperatures, try to use natural light and keep lights off during the day."
            ];
            break;
          case 'broken clouds':
          case 'shower rain':
            messages = [
              "With mild weather and some rain, combine errands into one trip to save fuel and minimize emissions."
            ];
            break;
          case 'rain':
          case 'mist':
          case 'thunderstorm':
            messages = [
              "With moderate temperatures and rain, you’re likely indoors more—unplug devices to conserve energy."
            ];
            break;
          default:
            messages = ["No specific recommendations for this weather condition."];
        }
        break;
      case 'lowTemp': // 10°C - 15°C
        switch (condition) {
          case 'clear sky':
          case 'few clouds':
          case 'scattered clouds':
          case 'overcast clouds':
            messages = [
              "It’s cool and clear. Layer up instead of increasing heating, especially in the morning and evening.",
              "With clear skies, let in sunlight to naturally warm your space and keep heating needs low."
            ];
            break;
          case 'broken clouds':
          case 'shower rain':
            messages = [
              "If you have limited heating, wait for a break in the clouds to help dry clothes naturally."
            ];
            break;
          case 'mist':
            messages = [
              "With cool temperatures and mist, use public transportation instead of driving to reduce emissions."
            ];
            break;
          case 'snow':
            messages = [
              "With snow and cool temperatures, try warm layers indoors to minimize heating needs."
            ];
            break;
          default:
            messages = ["No specific recommendations for this weather condition."];
        }
        break;
      case 'veryLowTemp': // Below 10°C
        switch (condition) {
          case 'clear sky':
          case 'few clouds':
          case 'scattered clouds':
          case 'overcast clouds':
            messages = [
              "With clear skies, open curtains to let natural light help warm your home during the day.",
              "Layer up to stay warm, and keep heating on a moderate setting to conserve energy."
            ];
            break;
          case 'broken clouds':
          case 'shower rain':
          case 'thunderstorm':
            messages = [
              "Keep doors closed in unused rooms to maximize warmth in main areas with less heating."
            ];
            break;
          case 'rain':
          case 'snow':
          case 'mist':
            messages = [
              "On cold, wet days, public transport is a great way to reduce emissions and avoid icy roads."
            ];
            break;
          default:
            messages = ["No specific recommendations for this weather condition."];
        }
        break;
      default:
        messages = ["No specific recommendations for this temperature category."];
    }
    return messages;
  };

  useEffect(() => {
    console.log("Weather data:", weather);
    console.log("Temperature category:", temp);
    console.log("Recommendations:", recommendations);
}, [weather, temp, recommendations]);

  return (
    <View>
      <WeatherApi setWeather={setWeather} />
      {weather ? (
        <View>
          <Text>Weather Recommendations: 
          {recommendations.map((rec, index) => (
            <Text>{rec}</Text>
          ))}</Text>
        </View>
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
  )
}


export default WeatherRecs;