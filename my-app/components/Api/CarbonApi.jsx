import { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

function CarbonAPI({ setCarbonIntensity }) {

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
    setCarbonIntensity(body.data[0].intensity.index)
});
 }, [])

 return (
    <View>
    </View>
  );
}

export default CarbonAPI