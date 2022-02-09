import React from "react";
import { Text, View, TextInput, Button, FlatList, Modal, SectionList } from 'react-native';
import styles from "./styles";

function ItemList({itemList , handleOnDelete }){ 
    return (
        <FlatList 
        data={itemList}
        renderItem={({item}) => (
          <View  style={styles.item}>
            <Text> {item.value} </Text>
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