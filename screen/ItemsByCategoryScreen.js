import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Colors from "../constants/Colors";
import {STOCK} from '../data/stock';
import DetailItems from "../components/DetailItems";

function ItemsByCategoryScreen({navigation, route}){
    const filterStock = STOCK.filter(item => item.category === route.params.categoryID)

    const handlePress = () => {
        navigation.navigate('DetailsScreen')
    }
    const renderItem = ({ item }) => (
        <DetailItems
        item = {item}
        onSelected={handlePress}
        />
    )
    
        return(
            <FlatList 
                data={filterStock}
                renderItem={renderItem}
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
  



export default ItemsByCategoryScreen