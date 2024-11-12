import { Text, View } from 'react-native'

export default function Recommendation({ recommendation }) {
    return (
        <View>
            <Text>{recommendation}</Text>
        </View>
    )
}