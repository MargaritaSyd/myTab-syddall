import React from "react";
import { StyleSheet } from "react-native";
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
                tabBarStyle: styles.tabStyle,
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

const styles = StyleSheet.create({
    tabStyle: {
        position: 'absolute',
        height: 60

    }
})

export default TabNavigator