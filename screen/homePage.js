import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import styles from "../components/AddItems/styles";
import Logo from './components/Header/Logo.js';

function homePage(){
    return(
        <View style={styles.home}>
            <Logo/>
            <Text style={styles.homeTitle} > HomePage</Text>
        </View>
        
    )
}
const styles = StyleSheet.create({})