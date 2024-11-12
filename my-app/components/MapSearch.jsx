import { StyleSheet, View, TextInput, TouchableOpacity, Text } from "react-native";

export default function MapSearch({ onTyping, onSubmit }) {
    return (
        <View style={styles.container}>
            <View style={styles.form}>
                <TextInput onChangeText={onTyping} style={styles.bar} placeholder="Search" />
                <TouchableOpacity style={styles.button}>
                    <Text onPress={onSubmit} style={styles.buttonText}>Search</Text>
                </TouchableOpacity>
            </View>
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
    form: {
        flexDirection: "row",
        alignItems: "center"
    },
    bar: {
        width: 250,
        height: 25,
        borderRadius: 25,
        paddingLeft: 10,
        backgroundColor: "#f4f1de"
    },
    button: {
        marginLeft: 10,
        paddingVertical: 5,
        paddingHorizontal: 15,
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
