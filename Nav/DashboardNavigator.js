import React from "react";
import Colors from "../constants/Colors";
import { StyleSheet } from "react-native";
import Typography from "../constants/Typography";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
//import HomeInventoryScreen from "../screen/HomeInventoryScreen";
import DashboardScreen from "../screen/DashboarScreen";
import StockScreen from "../screen/StockScreen";
import SalesScreen from "../screen/SalesScreen";

import InventoryScreen from "../screen/InventoryScreen";
import Test2 from "../screen/Test2";
import Test1 from "../screen/Test1";


const Stack = createNativeStackNavigator();

const DashboardNavigator = () => {
    return (
        <Stack.Navigator 
            initialRouteName="Dashboard"
            screenOptions={{
                headerStyle: styles.header,
                headerTitleStyle: styles.headerTitle,
                headerTintColor: Platform.OS === 'ios' ? Colors.primary : 'white'
            }}
            
        >
            <Stack.Screen 
                name="Dashboard" 
                component={DashboardScreen}
                options={{
                    headerTintColor: Colors.primary,
                    //title: "Tu inventario"
                }}    
            />
            <Stack.Screen name="Inventory" component={InventoryScreen}/>
            <Stack.Screen name='Orders' component={Test2} />
            <Stack.Screen name='Sales' component={SalesScreen} />
            <Stack.Screen 
                    name='Stock' 
                    component={StockScreen} 
                    options ={{
                        // headerTintColor: Colors.primary,
                         title: 'Agregar a tu stock'
                     }}
            />
            <Stack.Screen name='NewInventory' component={Test2} />
            <Stack.Screen name='InventoryRegister' component={Test1} />
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
export default DashboardNavigator