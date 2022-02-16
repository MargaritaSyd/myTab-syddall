import React from "react";
import { TextInput, StyleSheet } from "react-native";

function Input({style, children , ...props}){
    return(
        <TextInput
            style={styles.input, style}
            {...props}
        />
    )
}

const styles = StyleSheet.create({
    input: {
        borderBottomColor: "#dbec66",
        borderBottomWidth: 1,
        flex: 1,
        marginRight: 20,
        color: "#070c32"
       
    }
})

export default Input