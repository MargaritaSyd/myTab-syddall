import React from "react";
import { Text, View, TextInput, FlatList, Modal, SectionList } from 'react-native';
import styles from "./styles";
import Button from "../Button";

function ItemList({itemList , handleOnDelete , handleAddToStock}){ 
    return (
        <FlatList 
        data={itemList}
        renderItem={({item}) => (
          <View  style={styles.item}>
            <Text style={styles.textList}> Producto: {item.value} </Text>
            <View style={styles.stockMeasure}>
              <Text style={styles.textList}> Stock: {item.stock} </Text>
              <Text style={styles.textList}> {item.measure} </Text>
            </View>
            <Text style={styles.textList}> Categoría: {item.category} </Text>
            <Text style={styles.textList}> Precio: ${item.price} </Text>
            <View style={styles.buttonsStyles}>
              <Button 
                onPress={() => handleAddToStock(item)}
                title='Add Item'
              />
              <Button 
                onPress={() => handleOnDelete(item)}
                title='X'
              />
            </View>
          </View>

        )}

      keyExtractor={ item => item.id}
      /> 
    )}
    
export default ItemList