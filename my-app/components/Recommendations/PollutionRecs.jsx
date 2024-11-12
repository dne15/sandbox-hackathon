import { View, Text } from "react-native";

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