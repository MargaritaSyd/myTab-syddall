import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { STOCK } from '../data/stock';
import Typography from "../constants/Typography";
import Colors from "../constants/Colors";

function DetailsScreen(){
    const route = useRoute();
    const detailItem = STOCK.find(item => item.id === route.params.itemId)
    return(
        <View style={styles.conteinerDetail}>
            <Text style={styles.detailText}> 
                {detailItem.name} 
            </Text>
            <Text style={styles.detailText}>
                Price: {detailItem.price}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    detailText: {
        fontFamily: Typography.titleFont,
        fontSize: 20,
        color: Colors.primary,
        padding: 10
        
    },
    conteinerDetail: {
        flex: 1,
        backgroundColor: Colors.backGround,
        
    }
})

export default DetailsScreen