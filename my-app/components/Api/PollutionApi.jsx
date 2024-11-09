import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

const AirQuality = () => {
  const [airQuality, setAirQuality] = useState(null);

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
            location: {
              latitude: 51.5072,
              longitude: 0.1276,
            },
          }),
        }
      );
      const data = await response.json();
      setAirQuality(data);
    } catch (error) {
      console.error('Error fetching air quality data:', error);
    }
  };

  // Extract the category if airQuality data is available
  const category = airQuality?.indexes?.[0]?.category;

  return (
    <View>
      <Button title="Get Air Quality" onPress={fetchAirQuality} />
      {airQuality && (
        <View>
          <Text>Air Quality Category:</Text>
          <Text>{category || 'No category data available'}</Text>
        </View>
      )}
    </View>
  );
};

export default AirQuality;
