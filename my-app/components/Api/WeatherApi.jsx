import { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

function WeatherApi() {
  const [city, setCity] = useState("");
  const [cityConf, setCityConf] = useState("");
  const [weather, setWeather] = useState(null);

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
            <Text style={styles.boldText}>The Temp is: </Text>{(weather.main.temp - 273.15).toFixed(2)}°C
          </Text>
        ) : null}
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
