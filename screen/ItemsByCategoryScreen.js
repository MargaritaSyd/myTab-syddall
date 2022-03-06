import React, { useState } from "react";
import { useSelector } from "react-redux"
import { StyleSheet, FlatList } from 'react-native';
import Colors from "../constants/Colors";
import {STOCK} from '../data/stock';
import DetailItems from "../components/DetailItems";

function ItemsByCategoryScreen({navigation, route}){
    
    const stock = useSelector(state => state.stock.list);
    const selectedCategory = useSelector(state => state.categories.selected);


    const filterStock = stock.filter(item => item.category === selectedCategory.id)

    const handlePress = (item) => {
        navigation.navigate('DetailsScreen' , {
            name: item.name,
            itemId: item.id
        })
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