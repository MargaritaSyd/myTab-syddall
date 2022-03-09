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
            <Text style={styles.textList}> {item.value} </Text>
            <Text style={styles.textList}> {item.stock} </Text>
            <Text style={styles.textList}> {item.measure} </Text>
            <Text style={styles.textList}> {item.category} </Text>
            <Text style={styles.textList}> {item.price} </Text>
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