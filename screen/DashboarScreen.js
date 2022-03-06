import React, { useState } from "react";
import { Dimensions, StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import Colors from "../constants/Colors";
import Button from "../components/Button";
import Typography from "../constants/Typography";
import Logo from "../components/Header/Logo";


//function HomePageScreen({onHandleHomePage}){
function DashboardScreen({navigation}){
    
   // const [actionSelected , setActionSelected] = useState('')
    const { width, height } = useWindowDimensions();

    const isPortrait = height  >= width;

     

     const handleOnHomeToInventoryScreen = () => {
        navigation.navigate('Inventory')
     }

     const handleOnHomeToOrdersScreen = () => {
        navigation.navigate('Orders')
     }


     const handleOnHomeToStockScreen = () => {
        navigation.navigate('Stock')
     }
     
      const handleSales = () => {
          navigation.navigate('Sales')
      }

        return(

            <View style={isPortrait ? styles.containerHome : styles.containerHomeLandscape}>
                <Logo/>
                <View style={styles.buttonConteiner}>
                    <Button title="Agregar a tu Stock" style={styles.buttonHome} onPress={handleOnHomeToStockScreen}/>
                </View>
                
                <View style={styles.buttonConteiner}>
                    <Button title="Inventario" style={styles.buttonHome} onPress={handleOnHomeToInventoryScreen}/>
                </View>
                <View style={styles.buttonConteiner}>
                    <Button title="Pedidos" style={styles.buttonHome} onPress={handleOnHomeToOrdersScreen}/>
                </View>
                <View style={styles.buttonConteiner}>
                    <Button title="Ventas" style={styles.buttonHome} onPress={handleSales} />
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
    containerHomeLandscape: {
        //padding:50,
        //padding: Dimensions.get('window').width >= 400 ? 100 : 50,
     
        marginLeft: '20%',
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
        fontSize: Dimensions.get('window').width >= 600 ? 25 : 22,
        color: Colors.backGround,
        

    },
    buttonConteiner: {
        marginBottom: 10,
        marginLeft: 15,
        width: 300,
        maxWidth: '80%'

    }
})
  



export default DashboardScreen