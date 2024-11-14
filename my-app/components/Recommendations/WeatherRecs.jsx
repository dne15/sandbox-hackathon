import { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';

function WeatherRecs({ weather }) {
  const [temp, setTemp] = useState(null);
  const [recommendation, setRecommendation] = useState("");

  // Parse celsius as a number to avoid incorrect comparisons
  const celsius = weather ? parseFloat((weather.temperature - 273.15).toFixed(1)) : null;

  useEffect(() => {
    if (celsius !== null) {
      console.log("Temperature in Celsius:", celsius); // Debugging log
      if (celsius > 30) setTemp("veryHighTemp");
      else if (celsius > 25) setTemp("highTemp");
      else if (celsius > 15) setTemp("moderate");
      else if (celsius > 10) setTemp("lowTemp");
      else setTemp("veryLowTemp");
      console.log("Temperature category:", temp); // Debugging log
    }
  }, [celsius]);

  useEffect(() => {
    if (weather && temp) {
      setRecommendation(weatherRecommendation(weather.description, temp));
    }
  }, [weather, temp]);

  const weatherRecommendation = (condition, tempCategory) => {
    if (tempCategory === 'veryHighTemp') {
      return "With clear skies, try natural ventilation by opening windows. Drink plenty of water to stay cool without excessive AC.";
    } else if (tempCategory === 'highTemp') {
      return "Stay hydrated, and consider reducing energy usage in the hottest hours. Use fans instead of AC to stay cool where possible.";
    } else if (tempCategory === 'moderate') {
      return "Take advantage of the fresh air with a walk. Try to use natural light and keep lights off during the day.";
    } else if (tempCategory === 'lowTemp') {
      return "Layer up and consider keeping heating moderate to save energy. Try to avoid long showers to save water and energy.";
    } else if (tempCategory === 'veryLowTemp') {
      return "It’s cold outside! Bundle up and minimize heating indoors where you can. Consider using blankets instead of increasing heat for warmth.";
    }
    return "";
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <MaterialCommunityIcons name="weather-sunny" size={24} color="#FFA726" />
        <Text style={styles.headerText}>Weather Recommendations</Text>
      </View>
      {weather ? (
        <View style={styles.messageContainer}>
          <Text style={styles.message}>{recommendation}</Text>
        </View>
      ) : (
        <Text style={styles.loading}>Loading...</Text>
      )}
    </View>
  );
}

export default WeatherRecs;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF3E0",
    borderRadius: 10,
    padding: 15,
    marginVertical: 10,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  headerText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FB8C00",
    marginLeft: 8,
  },
  messageContainer: {
    backgroundColor: "#FFE0B2",
    padding: 10,
    borderRadius: 5,
  },
  message: {
    color: "#E65100",
  },
  loading: {
    color: "#757575",
  },
});
