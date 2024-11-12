import React, { useEffect } from 'react';
import { View, Text, Button } from 'react-native';

const PollutionApi = ({setAirQuality, setRecommendation}) => {
  
  useEffect(() => {

  const fetchAirQuality = async () => {
    try {
      const response = await fetch(
        'https://airquality.googleapis.com/v1/currentConditions:lookup?key=AIzaSyAK1ZeCXUAEmQ4ugUfhi4K1i-8lYY4QEmg',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            universalAqi: true,
            location: {
              latitude: 31.582045,
              longitude: 74.329376,
            },
            extraComputations: [
              "HEALTH_RECOMMENDATIONS",
              "LOCAL_AQI"
            ],
            languageCode: "en"
          }),
        }
      );
      const data = await response.json();
      setAirQuality(data);
      const recommendation = data?.healthRecommendations?.generalPopulation;
      setRecommendation(recommendation);
    } catch (error) {
      console.error('Error fetching air quality data:', error);
    }
  };

fetchAirQuality()
  }, [setAirQuality, setRecommendation]);


  return 
};

export default PollutionApi;