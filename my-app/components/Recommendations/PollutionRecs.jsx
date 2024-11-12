import { useState } from "react";
import { View, Text } from "react-native";
import PollutionApi from '../Api/PollutionApi'

function PollutionRecs({ airRecommendation, airQuality }) {
    
    return (
    <View>
        {airQuality ? (
            <View>
                <Text> Air Quality Recomendation: {airRecommendation || 'No recommendation available'} </Text>
                </View>
        ) : (
            <Text>Loading...</Text>
        )}
    
    </View>
    
    )
}

export default PollutionRecs