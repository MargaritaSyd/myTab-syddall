import { useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { useDispatch } from 'react-redux';
import { StyleSheet, Text, View, Dimensions} from 'react-native';
import AddItem from '../components/AddItems/AddItem.js';
import ModalDelete from '../components/Modal.js';
import ItemList from '../components/ItemList/ItemList.js';
import Colors from '../constants/Colors.js';
import Typography from '../constants/Typography.js';
import { STOCK } from '../data/stock.js';
import { confirmAddItem } from "../store/actions/addItem.actions"

function StockScreen(navigation){

  const dispatch = useDispatch()

    const [textInput , setTextInput] = useState('');
    const [stockInput , setStockInput] = useState('');
    //const [measureInput , setMeasureInput] = useState('');
    //const [categoryInput, setCategoryInput] = useState('');
    const [category, setCategory] = useState('');
    const [priceInput, setPriceInput] = useState('');
    const [measure , setMeasure] = useState('')

    const [itemList , setItemList] = useState([]);
    const [itemSelected , setItemSelected] = useState({});
    const [modalVisible , setModalVisible] = useState(false);
    const [confirmedDeteail , setConfirmedDetail] = useState('');
  
    const [actionSelected , setActionSelected] = useState("");

    const handleChangeText = (text) => {
      setTextInput(text)
    }

    const handleChangeStock = (text) => {
      setStockInput(text.replace(/[^0-9]/g, ''))
    }
    // const handleChangeMeasure = (text) => {
    //   setMeasureInput(text)
    // }
    const handleCategorySA = () => {
      setCategory('S/A')
      console.log(category)
    }
    const handleCategoryV = () => {
      setCategory('Vino')
      console.log(category)
    }
    const handleCategoryC = () => {
      setCategory('Cerveza')
      console.log(category)
    }
    const handleCategoryW = () => {
      setCategory('Whiskey')
      console.log(category)
    }
    const handleCategoryD = () => {
      setCategory('Digestivo')
      console.log(category)
    }
    const handleCategoryA = () => {
      setCategory('Aperitivo')
      console.log(category)
    }
    const handleCategoryR = () => {
      setCategory('Ron')
      console.log(category)
    }
    const handleCategoryVK = () => {
      setCategory('Vodka')
      console.log(category)
    }
    const handleCategoryT = () => {
      setCategory('Tequila')
      console.log(category)
    }
    const handleCategoryS = () => {
      setCategory('Sake')
      console.log(category)
    }
    const handleChangePrice = (text) => {
      setPriceInput(text)
    }
    const handleMeasureU = (text) => {
      setMeasure("U")

    }
    const handleMeasureL = (text) => {
      setMeasure("L")

    }
    const handleOnPress = () => {
      setTextInput('')
      setStockInput('')
      setMeasure('')
      setCategory('')
      setPriceInput('')
      setItemList([
        ...itemList, {
          value: textInput,
          stock: stockInput,
          measure: measure,
          price: priceInput,
          category: category,
          id: Math.random().toString(),
        },
      ])
    }
  
    const handleOnDelete = (item) => {
      setModalVisible(true)
      setItemSelected(item)
    }
    const handleAddToStock = () => {
      dispatch(confirmAddItem(STOCK))
     // alert('ok')
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
            priceInput = {priceInput}
            handleChangeText={handleChangeText}
            handleChangeStock={handleChangeStock}
            handleChangePrice = {handleChangePrice}
            handleCategorySA = {handleCategorySA}
            handleCategoryV = {handleCategoryV}
            handleCategoryC = {handleCategoryC}
            handleCategoryW = {handleCategoryW}
            handleCategoryD = {handleCategoryD}
            handleCategoryA = {handleCategoryA}
            handleCategoryR = {handleCategoryR} 
            handleCategoryVK = {handleCategoryVK}
            handleCategoryT = {handleCategoryT}
            handleCategoryS = {handleCategoryS}
            handleMeasureU = {handleMeasureU}
            handleMeasureL = {handleMeasureL}
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