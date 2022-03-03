import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Test1 from "../screen/Test1";
import Test2 from "../screen/Test2";
import Test3 from "../screen/Test3";
import StockScreen from "../screen/StockScreen";
import HomePageScreen from '../screen/HomePageScreen';

const Stack = createNativeStackNavigator();

function Navigator(){
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Home' component={HomePageScreen} />
                <Stack.Screen name='Stock' component={StockScreen} />
               <Stack.Screen name='Detail' component={Test3} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigator