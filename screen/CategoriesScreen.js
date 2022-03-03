import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { CATEGORIES } from "../data/categories";
import Colors from "../constants/Colors";


function CategoriesScreen(){
    
        return(
            <FlatList
                data = {CATEGORIES}
                keyExtractor={item => item.id}
                renderItem={({ item })=> <View><Text>{item.title}</Text></View> }
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