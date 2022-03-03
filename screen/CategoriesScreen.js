import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { CATEGORIES } from "../data/categories";
import Colors from "../constants/Colors";
import CategoriesItems from "../components/CategoriesItems";

function CategoriesScreen(){
    
const renderItem = ({ item }) => (
    <CategoriesItems
    item = {item}
    />
)

        return(
            <FlatList
                data = {CATEGORIES}
                keyExtractor={item => item.id}
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
  



export default CategoriesScreen