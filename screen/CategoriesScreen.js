import React, { useState } from "react";
import { FlatList, useWindowDimensions } from 'react-native';
import { useSelector , useDispatch } from "react-redux"
import { CATEGORIES } from "../data/categories";
import Colors from "../constants/Colors";
import CategoriesItems from "../components/CategoriesItems";
import { selectCategory } from '../store/actions/category.actions'

                

function CategoriesScreen({navigation}){

    const dispatch = useDispatch()
    const categories = useSelector(state => state.categories.list)
    //const { width, height } = useWindowDimensions();

    //const isPortrait = height  >= width;

    //let columns 
    //isPortrait ? columns = 2 : columns = 3

    const handlePress = (item) => {
        dispatch(selectCategory(item.id));
        navigation.navigate('Items by category' , {
            name: item.title,
            categoryID: item.id
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
                data = {categories}
                keyExtractor={item => item.id}
                renderItem={renderItem }
                numColumns={2} 
                
            />
        )
}
  



export default CategoriesScreen