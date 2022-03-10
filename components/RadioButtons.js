import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import Colors from "../constants/Colors";

function RadioButtons({ title, onPress, children , style}){
    return(
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={[styles.textButton , style]}>{title}</Text>
            {children}
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    button: {
        backgroundColor: Colors.primary,
        borderColor: 'white',
        borderWidth: 2,
        borderRadius: 6,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
        marginTop: 5,
        //marginBottom: 5
    },
    textButton: {
        color: Colors.buttonText
    }
})

export default RadioButtons