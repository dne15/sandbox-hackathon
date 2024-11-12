import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';

const AirQuality = ({ setAirQualityData, latitude, longitude }) => {
  const [airQuality, setAirQuality] = useState(null);

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
                latitude,
                longitude,
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
        setAirQualityData(data);
      } catch (error) {
        console.error('Error fetching air quality data:', error);
      }
    };

    if (latitude && longitude) {
      fetchAirQuality();
    }
  }, [latitude, longitude]);
  

  // Extract the category if airQuality data is available
  const category = airQuality?.indexes?.[0]?.category;
  const recommendation = airQuality?.healthRecommendations.generalPopulation;

  return (
    <View>
    </View>
  );
};

export default AirQuality;
