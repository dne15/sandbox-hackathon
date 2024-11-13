import { StyleSheet, View, TextInput, TouchableOpacity, Text } from "react-native";

export default function MapSearch({ onTyping, onSubmit }) {
    return (
        <View style={styles.container}>
            <View style={styles.form}>
                <TextInput onChangeText={onTyping} style={styles.bar} placeholder="Where are ya?" placeholderTextColor={"#F2F4F8"}/>
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
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#0B6F5D",
        },
    form: {
        flexDirection: "row",
        alignItems: "center"
    },
    bar: {
        backgroundColor: "#e07a5f",
        width: 250,
        height: 25,
        borderRadius: 25,
        paddingLeft: 10,
        color: "#F2F4F8",
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
        color: "#F2F4F8",
        fontSize: 16,
    },
});
