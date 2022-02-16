import React from "react";
import { View, StyleSheet } from "react-native-web";

function Card({ style,children }){
    return(
        <View style={[styles.cardConteiner , style]}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    cardConteiner: {
        shadowColor: "#000",
        shadowOffset: {
	    width: 0,
	    height: 7,
        },
        shadowOpacity: 0.43,
        shadowRadius: 9.51,

        elevation: 15,
    }
})

export default Card