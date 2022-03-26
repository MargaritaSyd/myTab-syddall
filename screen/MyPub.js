import React from "react";

import { StyleSheet, Text, View, FlatList, Dimensions } from 'react-native';

import Colors from "../constants/Colors";
import Typography from "../constants/Typography";
import Button from "../components/Button";




function MyPub({navigation}){
    
    const handleRecepies = () => {
        navigation.navigate('Recipies')
    }
    const handleMyPubDetail = () => {
        navigation.navigate('MyPubDetail')
    }
        return(
            <View style={styles.containerHome}>
                <View style={styles.buttonConteiner}>
                    <Button title="Mi Bar" style={styles.buttonHome} onPress={handleMyPubDetail}/>
                </View>
                <View style={styles.buttonConteiner}>
                    <Button title="Mis recetas" style={styles.buttonHome} onPress={handleRecepies}/>
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
        maxWidth: '80%',
        marginTop: 10

    },
    
})
  



export default MyPub