
import React from "react";
import { Provider } from "react-redux";
import {useFonts} from 'expo-font';
import AppLoading from "expo-app-loading";
import MainNavigator from "./Nav";

import store from "./store";

export default function App() {

    const [loaded] = useFonts({
      'Hubballi-Regular' : require('./assets/fonts/Hubballi-Regular.ttf')
  })
  
    if(!loaded) return <AppLoading />
  
  
  
   
  return(
    <Provider store={store}>
      <MainNavigator />
    </Provider>
  )
}