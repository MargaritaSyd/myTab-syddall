import React, { useEffect } from "react";
import { useDispatch , useSelector } from "react-redux";
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { getStock } from "../store/actions/stock.action";
import Input from "../components/Input";
import StockItems from "../components/StockItems";
import Colors from "../constants/Colors";




function NewInventory(){
    
    //Leer la DB stock
    const dispatch = useDispatch()
    const stock = useSelector(state => state.stock.list)

    useEffect(() => {
        dispatch(getStock())
    } , [])

    const renderItem = ({ item }) => (
        <StockItems
        item = {item}
        //onInventory={handlePress}
        />
    )
    
        return(
            <View style={styles.containerHome}>
                <Text style={styles.textHome}> Crea un nuevo inventario </Text>
                <View style={styles.dateConteiner}>
                    <Text style={styles.dateLabel}> FECHA: </Text>
                    <Input style={styles.date}
                    
                    
                    //onChangeText={handleChangeDate}
                    //value={dateInput}
                    />
                </View>
                <Text> Tu Stock:</Text>
                <FlatList 
                data={stock}
                renderItem={renderItem}
            />

            </View>
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
    },
    dateConteiner: {
      
        flexDirection: "row"
    },
    dateLabel: {
        color: Colors.primary,
        marginTop: 5
   
    },
    date: {
        color: Colors.primary
    }
})
  



export default NewInventory