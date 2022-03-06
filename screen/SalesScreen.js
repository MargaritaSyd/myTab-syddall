import React, { useState } from "react";
import { StyleSheet, Text, View } from 'react-native';
import Colors from "../constants/Colors";


function SalesScreen(){
    
        return(
            <View style={styles.containerHome}>
                <Text style={styles.textHome}>  SalesScreen </Text>
                
            </View>
        )
}

const styles = StyleSheet.create({
    containerHome: {
      padding:30,
      backgroundColor: Colors.backGround,
      flex: 1
    },
    textHome: {
        color: Colors.accent
    }
})
  



export default SalesScreen