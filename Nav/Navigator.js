import React from "react";
import { Platform, StyleSheet } from "react-native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Colors from "../constants/Colors";
import Typography from "../constants/Typography";

import Test1 from "../screen/Test1";
import Test2 from "../screen/Test2";
import StockScreen from "../screen/StockScreen";
import HomePageScreen from '../screen/HomePageScreen';
import CategoriesScreen from "../screen/CategoriesScreen";
import ItemsByCategoryScreen from "../screen/ItemsByCategoryScreen";
import DetailsScreen from "../screen/DetailsScreen";


const Stack = createNativeStackNavigator();

function Navigator(){
    return (
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
                       // headerTintColor: Colors.primary,
                        title: 'Inicio'
                    }}

                />
                <Stack.Screen name='Stock' component={StockScreen} />
                <Stack.Screen name='Items by category' component={ItemsByCategoryScreen} 
                options={({ route }) => ({
                    title: route.params.name,
                })} />
               <Stack.Screen name='Categories' component={CategoriesScreen} />
               <Stack.Screen 
                name='DetailsScreen' 
                component={DetailsScreen} 
                options={({ route }) => ({
                    title: route.params.name,
                    itemId: route.params.id
                })}
                />
            
            </Stack.Navigator>
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