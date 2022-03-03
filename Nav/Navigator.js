import React from "react";
import { Platform, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Colors from "../constants/Colors";
import Typography from "../constants/Typography";

import Test1 from "../screen/Test1";
import Test2 from "../screen/Test2";
import Test3 from "../screen/Test3";
import StockScreen from "../screen/StockScreen";
import HomePageScreen from '../screen/HomePageScreen';
import CategoriesScreen from "../screen/CategoriesScreen";

const Stack = createNativeStackNavigator();

function Navigator(){
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home"
            screenOptions={{
                headerStyle: styles.header,
                headerTitleStyle: styles.headerTitle,
                headerTintColor: Platform.OS === 'ios' ? Colors.primary : 'white'
            }}
            >
                <Stack.Screen 
                    name='Home' 
                    component={HomePageScreen} 
                    options ={{
                        headerTintColor: Colors.primary,
                        title: 'Inicio'
                    }}

                />
                <Stack.Screen name='Stock' component={StockScreen} />
                <Stack.Screen name='Inventory' component={Test1} />
                <Stack.Screen name='Orders' component={Test2} />
               <Stack.Screen name='Detail' component={Test3} />
               <Stack.Screen name='Categories' component={CategoriesScreen} />
            
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: Platform.OS === 'ios' ? "white" : Colors.accent
    },
    headerTitle: {
        fontFamily: Typography.titleFont,
    }
})
export default Navigator