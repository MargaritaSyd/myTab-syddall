import { useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions} from 'react-native';
import AddItem from '../components/AddItems/AddItem.js';
import ModalDelete from '../components/Modal.js';
import ItemList from '../components/ItemList/ItemList.js';
import Colors from '../constants/Colors.js';
import Typography from '../constants/Typography.js';


function StockScreen(){
    const [textInput , setTextInput] = useState('');
    const [stockInput , setStockInput] = useState('');
    
    const [itemList , setItemList] = useState([]);
    const [itemSelected , setItemSelected] = useState({});
    const [modalVisible , setModalVisible] = useState(false);
    const [confirmedDeteail , setConfirmedDetail] = useState('');
  
    const [actionSelected , setActionSelected] = useState("");

    const handleChangeText = (text) => {
      setTextInput(text)
    }
    const handleChangeStock = (text) => {
      setStockInput(text.replace(/[ˆ0-9]/g, ''))
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
      alert('ok')
     // setActionSelected("itemDetail")
     // setItemSelected(item)
     // onHandleStockScreen(actionSelected)
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
        <View style={styles.addItemConteiner}>
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
        </View>  
       
      
        <StatusBar style="auto" />
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      //padding:30,
      padding: Dimensions.get('window').width >= 400 ? 20 : 10,
      backgroundColor: Colors.backGround,
      flex: 1
    },
    title: {
      fontSize: 30,
      //fontWeight: 'bold',
      color: Colors.primary,
      fontFamily: Typography.titleFont,
        
    },
    addItemConteiner: {
      marginBottom: 30
    }
    
  
  });
  
export default StockScreen