import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function GenerateButton() {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>What can you do?</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 50,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#e07a5f"
    },
    button: {
        width: 300,
        height: 30,
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#e07a5f"
    },
    buttonText: {
        color: "#f4f1de",
        fontSize: 16,
    }
});
