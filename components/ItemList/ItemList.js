import React from "react";
import { Text, View, TextInput, FlatList, Modal, SectionList } from 'react-native';
import styles from "./styles";
import Button from "../Button";

function ItemList({itemList , handleOnDelete , handleDetail}){ 
    return (
        <FlatList 
        data={itemList}
        renderItem={({item}) => (
          <View  style={styles.item}>
            <Button onPress={() => handleDetail(item)} title = {item.value} ></Button>
            <Text style={styles.textList}> {item.stock} </Text>
            
            <Button 
              onPress={() => handleOnDelete(item)}
              title='X'
            />
          </View>

        )}

      keyExtractor={ item => item.id}
      /> 
    )}
    
export default ItemList