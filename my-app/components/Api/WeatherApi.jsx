import { useState, useEffect } from "react";
function WeatherApi({ cityName, setWeatherData }) {
  useEffect(() => {

    if (cityName) {
      fetch(
        `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=72981ed094d399cae0ff841f806f4508`
      )
        .then((response) => response.json())
        .then((data) => {
          if (data.length > 0) {
            const { lat, lon } = data[0];
            fetch(
              `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=72981ed094d399cae0ff841f806f4508`
            ) 
              .then((response) => response.json())
              .then((weatherData) => {
                const weatherInfo = {
                  lat,
                  lon,
                  temperature: (weatherData.main.temp - 273.15).toFixed(0),
                  description: weatherData.weather[0].description,
                };
                setWeatherData(weatherInfo);
              })
              .catch((error) => {
                console.error('Error fetching weather data:', error);
              });
          }
        })
        .catch((error) => {
          console.error('Error fetching geolocation data:', error);
        });
    }
  }, [cityName]);

  return 
}

export default WeatherApi;

