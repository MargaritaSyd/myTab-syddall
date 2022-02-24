import React, { useState } from "react";
import { StyleSheet, Text, View } from 'react-native';
import Colors from "../constants/Colors";
import Button from "../components/Button";


function testScreen(){

    return(
        <View style={styles.containerHome}>
            <Text> test Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    containerHome: {
      padding:30,
      backgroundColor: Colors.backGround,
      flex: 1
    },
})
  



export default testScreen