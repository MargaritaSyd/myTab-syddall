
import React from "react";
import Navigator from "./Nav/Navigator";
import {useFonts} from 'expo-font';
import AppLoading from "expo-app-loading";
import MainNavigator from "./Nav";

export default function App() {

    const [loaded] = useFonts({
      'Hubballi-Regular' : require('./assets/fonts/Hubballi-Regular.ttf')
  })
  
    if(!loaded) return <AppLoading />
  
  
  
   
  return(
    <MainNavigator />
  )
}