import React, { useState } from "react";
import { FlatList } from 'react-native';
import { CATEGORIES } from "../data/categories";
import Colors from "../constants/Colors";
import CategoriesItems from "../components/CategoriesItems";
import { NavigationContainer } from "@react-navigation/native";

function CategoriesScreen({navigation}){

    const handlePress = (item) => {
        navigation.navigate('Detail' , {
            name: item.title,
        }) 
    }
    
const renderItem = ({ item }) => (
    <CategoriesItems
    item = {item}
    onSelected={handlePress}
    />
)

        return(
            <FlatList
                data = {CATEGORIES}
                keyExtractor={item => item.id}
                renderItem={renderItem }
            />
        )
}
  



export default CategoriesScreen