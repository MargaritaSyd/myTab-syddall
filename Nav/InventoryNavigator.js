import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import InventoryScreen from "../screen/InventoryScreen";

const Stack = createNativeStackNavigator();

const InventoryNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Inventory" component={InventoryScreen}/>
        </Stack.Navigator>
    )
}

export default InventoryNavigator