import { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

function WeatherApi({ setWeather }) {

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=London,GB&appid=30c6e5c11bdf59ec139aba0fcc4f4ced`
      );
      const data = await response.json();
      setWeather(data);
    } catch(error) {
      console.log("Error fetching weather", error)
    }
   
    };

    fetchWeatherData()
  }, [setWeather])

  return 
}

export default WeatherApi
