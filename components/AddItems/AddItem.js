import React from "react";
import { View, TouchableWithoutFeedback, Keyboard , KeyboardAvoidingView} from 'react-native';
import styles from "./styles";
import Button from "../Button";
import Input from '../Input';

function AddItem({textInput, stockInput, priceInput, measureInput, categoryInput, handleChangeText, handleChangeStock, handleChangeMeasure, handleChangePrice, handleChangeCategory, handleOnPress}){ 

    return(
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.containerInputAddItem}
      >  
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
          <Input 
            placeholder='medida'
            onChangeText={handleChangeMeasure}
            value={measureInput}
            maxLength={4}
          />
          <Input 
            placeholder='categoría'
            onChangeText={handleChangeCategory}
            value={categoryInput}
           // maxLength={4}
          />
          <Input 
            placeholder='precio'
            onChangeText={handleChangePrice}
            value={priceInput}
           // maxLength={4}
          />
          
          <Button  
            onPress={handleOnPress}
            title="Add item"
          />
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>  
    )
}


export default AddItem
