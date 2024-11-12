import { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import PollutionApi from '../Api/PollutionApi'

function PollutionRecs() {

    const [airQuality, setAirQuality] = useState(null);
    const [recommendation, setRecommendation] = useState(null);
    
    return (
    <View>
        <PollutionApi setAirQuality={setAirQuality} setRecommendation={setRecommendation} />
        {airQuality ? (
            <View>
                <Text> Air Quality Recomendation: {recommendation || 'No recommendation available'} </Text>
                </View>
        ) : (
            <Text>Loading...</Text>
        )}
    
    </View>
    
    )
}

export default PollutionRecs