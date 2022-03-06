import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { STOCK } from '../data/stock';

function DetailsScreen(){
    const route = useRoute();
    const detailItem = STOCK.find(item => item.id === route.params.itemId)
    return(
        <View>
            <Text> 
                {detailItem.name} 
                {detailItem.price}
            </Text>
        </View>
    )
}

//const styles = StyleSheet.create({})

export default DetailsScreen