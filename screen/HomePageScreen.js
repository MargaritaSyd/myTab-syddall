import React, { useState } from "react";
import { StyleSheet, Text, View } from 'react-native';
import Colors from "../constants/Colors";
import Button from "../components/Button";


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

                <Button title="Stock" style={styles.buttonHome} onPress={handleOnHomeToScreen}/>
                <Button title="Inventario" />
                <Button title="Pedidos" />
            
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
    },
    buttonHome: {
        marginTop: 5
    }
})
  



export default HomePageScreen