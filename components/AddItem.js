import React from "react";
import { StyleSheet, View, TextInput, Button} from 'react-native';

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

const styles = StyleSheet.create({
    inputStyle: {
        borderBottomColor: "black",
        borderBottomWidth: 1,
        flex: 1,
        marginRight: 20
        
      },
      inputContainer: {
      flexDirection: "row"
      },
})

export default AddItem
