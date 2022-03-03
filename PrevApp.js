import { useState} from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Logo from './components/Header/Logo.js';
import Colors from './constants/Colors.js';
import HomePageScreen from './screen/HomePageScreen.js';
import StockScreen from './screen/StockScreen.js';
import ScreenTest from './screen/ScreenTest.js';
import {useFonts} from 'expo-font';
import AppLoading from "expo-app-loading";


export default function PrevApp() {

  const [actionSelected , setActionSelected] = useState("");
//  const [detailItem , setDetailItem] = useState('');

  const [loaded] = useFonts({
    'Hubballi-Regular' : require('./assets/fonts/Hubballi-Regular.ttf')
})

  if(!loaded) return <AppLoading />


  const handleHomePage = (actionSelected) => {
     setActionSelected(actionSelected)
    }

  const handleDetailItem = (detailItem) => {
    setDetailItem(detailItem)
   //alert('ok')
  }
    // const handleStockScreen = (actionSelected) => {
    //   setActionSelected(actionSelected)
    // }

    let content = <HomePageScreen onHandleHomePage = {handleHomePage} />

    if(actionSelected == "stockScreen"){
     content = <StockScreen onHandleDetailItem = {handleDetailItem}/>
      //content = <StockScreen />
    
    }

    //if(detailItem){
    //  content = <ScreenTest/>
    //}
  
  
   

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