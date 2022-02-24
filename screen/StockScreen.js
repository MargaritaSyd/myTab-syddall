import { useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import AddItem from '../components/AddItems/AddItem.js';
import ModalDelete from '../components/Modal.js';
import ItemList from '../components/ItemList/ItemList.js';
import Logo from '../components/Header/Logo.js';
import Colors from '../constants/Colors.js';


function StockScreen(){
    const [textInput , setTextInput] = useState('');
    const [stockInput , setStockInput] = useState('');
    
    const [itemList , setItemList] = useState([]);
    const [itemSelected , setItemSelected] = useState({});
    const [modalVisible , setModalVisible] = useState(false);
    const [confirmedDeteail , setConfirmedDetail] = useState('');
  
    const handleChangeText = (text) => {
      setTextInput(text)
    }
    const handleChangeStock = (text) => {
      setStockInput(text.replace(/[ˆ0-9]/g,''))
    }
    const handleOnPress = () => {
      setTextInput('')
      setStockInput('')
      setItemList([
        ...itemList, {
          value: textInput,
          stock: stockInput,
          id: Math.random().toString(),
        },
      ])
    }
  
    const handleOnDelete = (item) => {
      setModalVisible(true)
      setItemSelected(item)
    }
    const handleDetail = (item) => {
      setConfirmedDetail(true);
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
       handleDetail = {handleDetail}
       />
           {confirmedDeteail ? <Text> OK</Text> : null}
         
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
          stockInput={stockInput}
          handleChangeText={handleChangeText}
          handleChangeStock={handleChangeStock}
          handleOnPress={handleOnPress}
        />
  
       
      
        <StatusBar style="auto" />
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      padding:30,
      backgroundColor: Colors.backGround,
      flex: 1
    },
    title: {
      fontSize: 30,
      fontWeight: 'bold',
      color: Colors.primary
    },
    
  
  });
  
export default StockScreen