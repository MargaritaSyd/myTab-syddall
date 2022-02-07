import { useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';

export default function App() {
  const [textInput , setTextInput] = useState('');
  const [itemList , setItemList] = useState([]);

  const handleChangeText = (text) => {
    setTextInput(text)
  }

  const handleOnPress = () => {
    setTextInput('')
    setItemList([
      ...itemList, {
        value: textInput,
        id: Math.random().toString(),
      },
    ])
  }

 // console.log(textInput)
 console.log(itemList)

  return (
    <View style={styles.container}>
      <Text>Agregá un nuevo item a tu inventario</Text>
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
      {/* <View>
        {itemList.map(item => (
          <View key={item.id}>
            <Text> {item.value} </Text>
          </View>
        ))
        }
      </View> */}
      <FlatList 
        data={itemList}
        renderItem={({item}) => (
          <View  style={styles.item}>
            <Text> {item.value} </Text>
          </View>

        )}

     // keyExtractor={ item => item.id}
      /> 

     
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding:30,
  },
  inputStyle: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    flex: 1,
    marginRight: 20
    
  },
  inputContainer: {
  flexDirection: "row"
  },
  item: {
    padding: 20,
    marginVertical: 20,
    borderColor: 'black',
    borderWidth: 1
  }
});
