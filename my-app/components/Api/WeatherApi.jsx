import { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

function WeatherApi() {
  const [city, setCity] = useState("");
  const [cityConf, setCityConf] = useState("");
  const [weather, setWeather] = useState(null);
  const [temp, setTemp] = useState(null);
  const [recommendations, setRecommendations] = useState([])

  function handleTyping(text) {
    setCity(text);
  }

  function handleSubmit() {
    setCityConf(city);
  }

  useEffect(() => {
    if (cityConf) {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityConf},GB&appid=30c6e5c11bdf59ec139aba0fcc4f4ced`
      )
        .then((response) => response.json())
        .then((data) => setWeather(data));
    }
  }, [cityConf]);

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
    console.log(temp);
  }, [temp]);

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
    if (weather && weather.weather && weather.weather[0]) {
      const condition = weather.weather[0].description.toLowerCase();
      const tempCategory = temp;
      console.log("Condition:", condition);
      console.log("Temp Category:", tempCategory);
      const recs = weatherRecommendation(condition, tempCategory)
      setRecommendations(recs)
    }
}, [weather, temp])
  

  return (
    <View style={styles.container}>
      <View style={styles.nav}>
        <TextInput
          style={styles.input}
          value={city}
          onChangeText={handleTyping}
          placeholder="Enter your City"
        />
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Search</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.weatherInfo}>
        {weather ? (
          <Text style={styles.weatherText}>
            <Text style={styles.boldText}>The weather overall in {cityConf} is:</Text> {weather.weather[0].description}
            {"\n\n"}
            <Text style={styles.boldText}>The Temp is: </Text>{(celsius)}°C
          </Text>
        ) : null}
      </View>
      <View style={styles.recommendations}>
        {recommendations.map((message, index) => (
          <Text key={index} style={styles.recommendationText}>{message}</Text>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff"
  },
  nav: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    backgroundColor: "#f4f1de",
  },
  button: {
    marginLeft: 10,
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: "#e07a5f",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#f4f1de",
    fontWeight: "bold",
  },
  weatherInfo: {
    marginTop: 20,
  },
  weatherText: {
    fontSize: 16,
    color: "#3d405b",
  },
  boldText: {
    fontWeight: "bold",
  }
});

export default WeatherApi;
