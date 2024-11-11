import { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import fetch from 'node-fetch';

function CarbonAPI() {
  const [carbonIntensity, setCarbonIntensity] = useState(null);
  const [carbonLevel, setCarbonLevel] = useState(null);

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

  const carbonRecommendation = (level) => {
    switch (level) {
      case 'very low':
        messages = [
          "Carbon levels are very low today—thank you for all the eco-friendly choices you make to help sustain this level!",
          "With very low emissions, it's a great day for a walk or bike ride to keep emissions low and enjoy nature.",
          "Today’s low emissions are a great opportunity to use energy-efficient cooking methods or experiment with plant-based recipes.",
          "Low-carbon days are perfect for trying out reusable containers and bags to keep emissions down over the long term.",
          "Spread the word about low-carbon living with friends and family to support ongoing emission reduction efforts!"
        ];
        break;
      case 'low':
        messages = [
          "Carbon levels are low today, but keeping lights off and using natural light where possible helps maintain low demand.",
          "Carbon levels are low—keeping car trips to a minimum can help sustain lower emissions over time.",
          "Low emissions today make it a perfect day to support local, seasonal produce to reinforce low-carbon choices.",
          "Unplugging unused devices is a great habit to continue on low-emission days to keep your impact minimal.",
          "Today’s lower emissions make it an ideal day to track your sustainable actions and build good habits."
        ];
        break;
      case 'moderate':
        messages = [
          "Carbon levels are moderate—try to combine high-energy tasks (like washing and cooking) into a single session to be energy-efficient.",
          "Today’s emissions are moderate—consider carpooling or using public transit to reduce carbon output.",
          "Keep your devices in energy-saving mode throughout the day to conserve energy.",
          "On moderate-carbon days, a single plant-based meal can help lower your daily carbon footprint.",
          "Moderate emissions are a great reminder to recycle or compost today to reduce waste-related emissions."
        ];
        break;
      case 'high':
        messages = [
          "Carbon levels are elevated—consider postponing large appliance use until later in the evening.",
          "Today’s emissions are higher than usual; try using public transport, biking, or walking to reduce vehicle emissions.",
          "Today’s high carbon levels make it a great time to conserve energy—adjusting your thermostat slightly can help.",
          "Save energy by taking shorter showers or using cold water for laundry today, to offset higher emissions.",
          "Opting for local, in-season foods on high-emission days can reduce transport-related emissions."
        ];
        break;
      case 'very high':
        messages = [
          "Carbon levels are extremely high today—try postponing all high-energy activities (laundry, dishwashing, charging large devices) until energy consumption decreases",
          "Today’s emissions are at critical levels—please unplug any non-essential devices and chargers to cut down on electricity use.",
          "Consider staying home today or carpooling if you must go out. High vehicle emissions contribute significantly on high-carbon days.",
          "With very high emissions, keep heating/cooling to a minimum—layer up or use fans selectively to conserve energy.",
        ];
        break;
      default:
        return 'No data available';
    }


  const randomIndex = Math.floor(Math.random() * messages.length);
  return messages[randomIndex];
  };
  return (
    <View>
      <Text>Carbon Intensity</Text>
      {carbonIntensity ? (
        <View>
          <Text>Intensity Level: {carbonLevel}</Text>
          <Text>Recommendation: {carbonRecommendation(carbonLevel)}</Text>
        </View>
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
  );
}
export default CarbonAPI;
