import React from "react";
import { View, Text, TouchableWithoutFeedback, Keyboard , KeyboardAvoidingView} from 'react-native';
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


function AddItem({textInput, stockInput, priceInput, handleChangeText, handleChangeStock, handleCategorySA, handleCategoryV, handleCategoryC, handleCategoryW, handleCategoryD, handleCategoryA, handleCategoryR, handleCategoryVK, handleCategoryT, handleCategoryS, handleMeasureU, handleMeasureL, handleChangePrice, handleOnPress}){ 

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
          <View>
            <Text>Categoría:</Text>
          </View>
          <View style={styles.radioButton}>
            <RadioButtons 
              onPress={handleCategorySA}
              title="S/A"
              />
            <RadioButtons 
              onPress={handleCategoryV}
              title="Vino"
              />
            <RadioButtons 
              onPress={handleCategoryC}
              title="Cerveza"
              />
            <RadioButtons 
              onPress={handleCategoryW}
              title="Whiskey"
              />
            <RadioButtons 
              onPress={handleCategoryD}
              title="Digestivo"
              />
          </View>
          <View style={styles.radioButton}>
          
            <RadioButtons 
              onPress={handleCategoryA}
              title="Aperitivo"
              />
            <RadioButtons 
              onPress={handleCategoryR}
              title="Ron"
              />
            <RadioButtons 
              onPress={handleCategoryVK}
              title="Vodka"
              />
            <RadioButtons 
              onPress={handleCategoryT}
              title="Tequila"
              />
            <RadioButtons 
              onPress={handleCategoryS}
              title="Sake"
              />
          </View>
          <Input 
            placeholder='stock'
            onChangeText={handleChangeStock}
            value={stockInput}
            maxLength={4}
          />
          
          <Input 
            placeholder='precio por medida'
            onChangeText={handleChangePrice}
            value={priceInput}
           // maxLength={4}
          />
          <View>
            <Text>Unidad de medida:</Text>
          </View>
          <View style={styles.radioButton}>
            <RadioButtons 
              onPress={handleMeasureU}
              title="Unidades"
              />
            <RadioButtons 
              onPress={handleMeasureL}
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
