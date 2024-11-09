import { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

function CarbonAPI() {

const [carbonIntensity, setCarbonIntensity] = useState(null);

const request = require('node-fetch');
 
const headers = {
  'Accept':'application/json'
 
};
 useEffect(() => {
    fetch('https://api.carbonintensity.org.uk/intensity',
{
  method: 'GET',
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
    setCarbonIntensity(body)
});
 }, [])

 return (
    <View>
      <Text>Carbon Intensity</Text>
      {carbonIntensity ? (
        <Text>{carbonIntensity.data[0].intensity.index}</Text>
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
  );
}

export default CarbonAPI