import { View, Text, StyleSheet } from "react-native";

function PollutionRecs({ airRecommendation, airQuality }) {
    
    return (
    <View>
        {airQuality ? (
            <View>
                <Text style={styles.container}> Air Quality Recomendation: {airRecommendation || 'No recommendation available'} </Text>
                </View>
        ) : (
            <Text>Loading...</Text>
        )}
    
    </View>
    
    )
}

export default PollutionRecs

const styles = StyleSheet.create({
    container: {
      color: "#001629",
    }
  })