import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import Colors from "../constants/Colors";

function Button({ title, onPress, children}){
    return(
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.textButton}>{title}</Text>
            {children}
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    button: {
        backgroundColor: Colors.buttonBackGround,
        borderColor: 'white',
        borderWidth: 2,
        marginTop: 5,
        marginBottom: 5
    },
    textButton: {
        color: Colors.buttonText
    }
})

export default Button