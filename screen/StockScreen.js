import { useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions} from 'react-native';
import AddItem from '../components/AddItems/AddItem.js';
import ModalDelete from '../components/Modal.js';
import ItemList from '../components/ItemList/ItemList.js';
import Colors from '../constants/Colors.js';
import Typography from '../constants/Typography.js';


function StockScreen(navigation){
    const [textInput , setTextInput] = useState('');
    const [stockInput , setStockInput] = useState('');
    const [measureInput , setMeasureInput] = useState('');
    const [categoryInput, setCategoryInput] = useState('');
    const [priceInput, setPriceInput] = useState('');

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
    const handleChangeMeasure = (text) => {
      setMeasureInput(text)
    }
    const handleChangeCategory = (text) => {
      setCategoryInput(text)
    }
    const handleChangePrice = (text) => {
      setPriceInput(text)
    }
    const handleOnPress = () => {
      setTextInput('')
      setStockInput('')
      setMeasureInput('')
      setCategoryInput('')
      setPriceInput('')
      setItemList([
        ...itemList, {
          value: textInput,
          stock: stockInput,
          measure: measureInput,
          price: priceInput,
          category: categoryInput,
          id: Math.random().toString(),
        },
      ])
    }
  
    const handleOnDelete = (item) => {
      setModalVisible(true)
      setItemSelected(item)
    }
    const handleAddToStock = (item) => {
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
        <View style={styles.addItemConteiner}>
          <View>
            <Text style={styles.title}>Agregá un nuevo item a tu stock</Text>
          </View>
          <AddItem
            textInput={textInput}
            stockInput={stockInput}
            measureInput={measureInput} 
            categoryInput = {categoryInput}
            priceInput = {priceInput}
            handleChangeText={handleChangeText}
            handleChangeStock={handleChangeStock}
            handleChangeMeasure={handleChangeMeasure}
            handleChangePrice = {handleChangePrice}
            handleChangeCategory = {handleChangeCategory}
            handleOnPress={handleOnPress}
          />
        </View>  
        
        < ItemList 
       itemList = {itemList}
       handleOnDelete = {handleOnDelete}
       handleAddToStock = {handleAddToStock}
       />
           {confirmedDeteail ? <Text> OK</Text> : null}
         
         < ModalDelete
        modalVisible = {modalVisible}
        itemSelected = {itemSelected}
        handleConfirmDelete = {handleConfirmDelete}
        />

       
      
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