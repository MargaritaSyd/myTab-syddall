import { useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, FlatList, Modal } from 'react-native';

export default function App() {
  const [textInput , setTextInput] = useState('');
  const [itemList , setItemList] = useState([]);
  const [itemSelected , setItemSelected] = useState({});
  const [modalVisible , setModalVisible] = useState(false);

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

  const handleOnDelete = (item) => {
    setModalVisible(true)
    setItemSelected(item)
  }

  const handleConfirmDelete = () => {
    const {id} = itemSelected
    setItemList(itemList.filter(item => item.id !== id))
    setModalVisible(false)
    setItemSelected({})
  }
 // console.log(textInput)
// console.log(itemList)

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
      <Modal animationType='slide' visible={modalVisible}>
          <View>
            <View>
              <Text> Estas seguro? </Text>
              <Text> {itemSelected.value} </Text>
            </View>
            <View>
              <Button
              onPress={handleConfirmDelete}
              title='Confirmar'
              />
            </View>
          </View>
      </Modal>
     
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
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  }
});
