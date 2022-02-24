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
import testScreen from './screen/testScreen.js';

export default function App() {

  const [actionSelected , setActionSelected] = useState('');

  // const handleHomePage = (actionSelected) => {
  //   // setActionSelected(actionSelected)
  // //   if(actionSelected == true){
  //     alert('ok')
  //   //}
  //  }

  const handleHomePage = (actionSelected) => {
     setActionSelected(actionSelected)
    }

    let content = <HomePageScreen onHandleHomePage = {handleHomePage} />

    if(actionSelected == true){
     // content = < testScreen />
     alert('ok')
     }

  //let content = <HomePageScreen />

  
   

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