import { useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import AddItem from './components/AddItems/AddItem.js';
import ModalDelete from './components/Modal.js';
import ItemList from './components/ItemList/ItemList.js';
import Logo from './components/Header/Logo.js';
import Colors from './constants/Colors.js';
import HomePageScreen from './screen/HomePageScreen.js';
import StockScreen from './screen/StockScreen.js';


export default function App() {

  const [actionSelected , setActionSelected] = useState('')

  const handleHomePage = selectedAction => {
    setActionSelected(actionSelected)
  }

  let content = <HomePageScreen onHomePage={handleHomePage} />

  if(itemDetail){
    content = <StockScreen/>
  }

    return(
      <View style = {styles.container}>
        <Logo/>
        {content}
      </View>
    )
  }

  const styles = StyleSheet.create({
    container: {
      backgroundColor: Colors.backGround,
      flex: 1
    }
  })