import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Navigator from "./Navigator";
import InventoryNavigator from "./InventoryNavigator";

const Tab = createBottomTabNavigator();

function TabNavigator (){
    return (
        <Tab.Navigator
            initialRouteName="Main"
            screenOptions={{
                headerShown: false,
            }}

        >
            <Tab.Screen 
                name="Main" 
                component={Navigator}
                    
            />
            <Tab.Screen name="Inventory" component={InventoryNavigator} />
        </Tab.Navigator>
    )
}

export default TabNavigator