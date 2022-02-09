import { useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import AddItem from './components/AddItems/AddItem.js';
import ModalDelete from './components/Modal.js';
import ItemList from './components/ItemList/ItemList.js';
import Logo from './components/Header/Logo.js';

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
      <Logo/>
      <View>
        <Text style={styles.title}> Tu Stock </Text>
      </View>
      < ItemList 
     itemList = {itemList}
     handleOnDelete = {handleOnDelete}
     />
       < ModalDelete
      modalVisible = {modalVisible}
      itemSelected = {itemSelected}
      handleConfirmDelete = {handleConfirmDelete}
      />
      <View>
        <Text style={styles.title}>Agregá un nuevo item a tu stock</Text>
      </View>
      <AddItem
        textInput={textInput}
        handleChangeText={handleChangeText}
        handleOnPress={handleOnPress}
      />
      
     
    
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding:30,
    backgroundColor: "#050a30"
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: "#e7e1a0"
  },
  

});
