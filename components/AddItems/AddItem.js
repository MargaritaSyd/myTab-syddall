import React from "react";
import { View, TouchableWithoutFeedback, Keyboard , KeyboardAvoidingView} from 'react-native';
import styles from "./styles";
import Button from "../Button";
import Input from '../Input';
import RadioButtons from "../RadioButtons";
import {CATEGORIES} from "../../data/categories" 

const options = [
  {
    id: '1',
    title: 'Sin Alcohol',
    color: '#F0F0C9'
},
{
    id: '2',
    title: 'Vino',
    color: '#F2BB05',
},

]


function AddItem({textInput, stockInput, priceInput, measureInput, categoryInput, handleChangeText, handleChangeStock, handleChangeMeasure, handleMeasure, handleChangePrice, handleChangeCategory, handleOnPress}){ 

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
            accessibilityRole = "radio"
            placeholder='medida'
            onChangeText={handleChangeMeasure}
            value={measureInput}
            maxLength={4}
          />
          <Input 
            accessibilityRole = "radio"
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
          <View style={styles.radioButton}>
            <RadioButtons 
              onPress={handleMeasure}
              title="Unidades"
              />
            <RadioButtons 
              onPress={handleMeasure}
              title="Litros"
            />
          </View>  
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
