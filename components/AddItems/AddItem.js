import React from "react";
import { View, TextInput, Button} from 'react-native';
import styles from "./styles";

function AddItem({textInput, handleChangeText, handleOnPress}){ 

    return(
    
        <View style={styles.inputContainer}>
      
        <TextInput 
          style={styles.inputStyle} 
          placeholder='Marca'
          onChangeText={handleChangeText}
          value={textInput}
        />
        <Button  
          onPress={handleOnPress}
          title="Add item"
        />
        </View>
  
    )
}


export default AddItem
