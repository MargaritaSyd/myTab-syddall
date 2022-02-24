import React, { useState } from "react";
import { StyleSheet, Text, View } from 'react-native';
import Colors from "../constants/Colors";
import Button from "../components/Button";


function ScreenTest(){
    
        return(
            <View style={styles.containerHome}>
                <Text style={styles.textHome}> Screen Test</Text>
                
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
  



export default ScreenTest