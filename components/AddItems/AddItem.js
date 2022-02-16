import React from "react";
import { View, TouchableWithoutFeedback, Keyboard} from 'react-native';
import styles from "./styles";
import Button from "../Button";
import Input from '../Input'

function AddItem({textInput, stockInput, handleChangeText, handleChangeStock, handleOnPress}){ 

    return(
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inputContainer}>
      
        <Input 
          placeholder='Marca'
          onChangeText={handleChangeText}
          value={textInput}
        />
        <Input 
          placeholder='stock'
          onChangeText={handleChangeStock}
          value={stockInput}
          maxLength={4}
        />
        <Button  
          onPress={handleOnPress}
          title="Add item"
        />
        </View>
      </TouchableWithoutFeedback>
    )
}


export default AddItem
