import { View, Text, StyleSheet } from "react-native";
import { FontAwesome5 } from '@expo/vector-icons';

function PollutionRecs({ airRecommendation, airQuality }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <FontAwesome5 name="smog" size={24} color="#757575" />
        <Text style={styles.headerText}>Pollution Recommendations</Text>
      </View>
      {airQuality ? (
        <View style={styles.messageContainer}>
          <Text style={styles.message}>{airRecommendation || "No recommendation available"}</Text>
        </View>
      ) : (
        <Text style={styles.loading}>Loading...</Text>
      )}
    </View>
  );
}

export default PollutionRecs;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ECEFF1",
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
    color: "#455A64",
    marginLeft: 8,
  },
  messageContainer: {
    backgroundColor: "#CFD8DC",
    padding: 10,
    borderRadius: 5,
  },
  message: {
    color: "#37474F",
  },
  loading: {
    color: "#757575",
  },
});
