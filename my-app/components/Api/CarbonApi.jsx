import { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import fetch from 'node-fetch';

function CarbonAPI({ setCarbonIntensity, setCarbonLevel }) {
  const headers = {
    'Accept': 'application/json',
  };

  useEffect(() => {
    fetch('https://api.carbonintensity.org.uk/intensity', {
      method: 'GET',
      headers: headers,
    })
      .then((res) => res.json())
      .then((body) => {
        console.log(body);
        setCarbonIntensity(body);
        const level = body.data?.[0]?.intensity?.index;
        setCarbonLevel(level);
      })
      .catch((error) => console.error("Error fetching carbon intensity:", error));
  }, []);

  return 
}

export default CarbonAPI;