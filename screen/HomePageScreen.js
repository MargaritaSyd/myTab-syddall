import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import Colors from "../constants/Colors";

function HomePageScreen(){
    return(
        <View style={styles.containerHome}>
            <Text> Home Page Screen</Text>
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
  



export default HomePageScreen