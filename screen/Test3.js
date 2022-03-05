import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Colors from "../constants/Colors";
import {STOCK} from '../data/stock';

function Test3({navigation, route}){
    const filterStock = STOCK.filter(item => item.category === route.params.categoryID)
        return(
            <FlatList 
                data={filterStock}
                renderItem={({item}) => (<View><Text>{item.name}</Text></View>)
                }
            />
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
  



export default Test3