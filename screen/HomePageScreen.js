import React, { useState } from "react";
import { StyleSheet, Text, View } from 'react-native';
import Colors from "../constants/Colors";
import Button from "../components/Button";
import Typography from "../constants/Typography";
import { color } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";


function HomePageScreen({onHandleHomePage}){
    
    const [actionSelected , setActionSelected] = useState('')

    const handleOnHomeToScreen = () => {
        setActionSelected("stockScreen")
        onHandleHomePage(actionSelected);
   
    // alert(actionSelected)
    }
    
        return(
            <View style={styles.containerHome}>
                <Text style={styles.textHome}> Bienvenido!</Text>
                <View style={styles.buttonConteiner}>
                    <Button title="Stock" style={styles.buttonHome} onPress={handleOnHomeToScreen}/>
                </View>
                <View style={styles.buttonConteiner}>
                    <Button title="Inventario" style={styles.buttonHome}/>
                </View>
                <View style={styles.buttonConteiner}>
                    <Button title="Pedidos" style={styles.buttonHome}/>
                </View>
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
        color: Colors.primary,
        fontFamily: Typography.titleFont,
        fontSize: 50
    },
    buttonHome: {
        marginTop: 5,
        marginBottom: 5,
        fontFamily: Typography.titleFont,
        fontSize: 20,
        color: Colors.backGround,
        

    },
    buttonConteiner: {
        marginBottom: 10,
        marginLeft: 15,
        width: 300,
        maxWidth: '80%'

    }
})
  



export default HomePageScreen