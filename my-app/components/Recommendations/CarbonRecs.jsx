import { View, Text, StyleSheet } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';

function CarbonRecs({ carbonIntensity }) {
  const carbonRecommendation = (level) => {
    let messages = [];
    switch (level) {
      case 'very low':
        messages = ["Carbon levels are very low today—thank you for all the eco-friendly choices you make to help sustain this level!", "With very low emissions, it's a great day for a walk or bike ride to keep emissions low and enjoy nature."];
        break;
      case 'low':
        messages = ["Carbon levels are low today, but keeping lights off and using natural light where possible helps maintain low demand.", "Carbon levels are low—keeping car trips to a minimum can help sustain lower emissions over time."];
        break;
      case 'moderate':
        messages = ["Carbon levels are moderate—try to combine high-energy tasks into a single session to be energy-efficient.", "Today’s emissions are moderate—consider carpooling or using public transit to reduce carbon output."];
        break;
      case 'high':
        messages = ["Carbon levels are elevated—consider postponing large appliance use until later in the evening.", "Today’s emissions are higher than usual; try using public transport, biking, or walking to reduce vehicle emissions."];
        break;
      case 'very high':
        messages = ["Carbon levels are extremely high today—try postponing all high-energy activities until energy consumption decreases.", "Today’s emissions are at critical levels—please unplug any non-essential devices and chargers to cut down on electricity use."];
        break;
      default:
        return "No data available";
    }

    const randomIndex = Math.floor(Math.random() * messages.length);
    return messages[randomIndex];
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <MaterialIcons name="eco" size={24} color="#4CAF50" />
        <Text style={styles.headerText}>Carbon Recommendations</Text>
      </View>
      {carbonIntensity ? (
        <View style={styles.messageContainer}>
          <Text style={styles.message}>{carbonRecommendation(carbonIntensity)}</Text>
        </View>
      ) : (
        <Text style={styles.loading}>Loading...</Text>
      )}
    </View>
  );
}

export default CarbonRecs;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#E8F5E9",
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
    color: "#388E3C",
    marginLeft: 8,
  },
  messageContainer: {
    backgroundColor: "#C8E6C9",
    padding: 10,
    borderRadius: 5,
  },
  message: {
    color: "#2E7D32",
  },
  loading: {
    color: "#757575",
  },
});
