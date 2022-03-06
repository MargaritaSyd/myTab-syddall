import React from "react";
import Colors from "../constants/Colors";
import { StyleSheet } from "react-native";
import Typography from "../constants/Typography";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeInventoryScreen from "../screen/HomeInventoryScreen";

import InventoryScreen from "../screen/InventoryScreen";
import Test2 from "../screen/Test2";


const Stack = createNativeStackNavigator();

const InventoryNavigator = () => {
    return (
        <Stack.Navigator 
            initialRouteName="HomeInventory"
            screenOptions={{
                headerStyle: styles.header,
                headerTitleStyle: styles.headerTitle,
                headerTintColor: Platform.OS === 'ios' ? Colors.primary : 'white'
            }}
            
        >
            <Stack.Screen 
                name="HomeInventory" 
                component={HomeInventoryScreen}
                options={{
                    headerTintColor: Colors.primary,
                    title: "Tu inventario"
                }}    
            />
            <Stack.Screen name="Inventory" component={InventoryScreen}/>
            <Stack.Screen name='Orders' component={Test2} />
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
export default InventoryNavigator