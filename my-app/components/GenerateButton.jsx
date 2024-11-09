import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function GenerateButton() {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>What can you do, bitch?</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 50,
        width: "100%",
        backgroundColor: "#3d405b",
        justifyContent: "center",
        alignItems: "center"
    },
    button: {
        width: 300,
        height: 30,
        borderRadius: 25,
        backgroundColor: "#e07a5f",
        justifyContent: "center",
        alignItems: "center"
    },
    buttonText: {
        color: "#f4f1de",
        fontSize: 16,
    }
});
