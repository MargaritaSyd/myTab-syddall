import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import Colors from "../constants/Colors";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Navigator from "./Navigator";
import DashboardNavigator from "./DashboardNavigator";
import { Entypo } from '@expo/vector-icons';
import Test2 from "../screen/Test2";
import Test1 from "../screen/Test1";


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
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View>
                            <Entypo name="drink" size={24} color={focused ? Colors.buttonBackGround : Colors.backGround} />
                        </View>
                    )
                }}
                    
            />
            <Tab.Screen 
                name="DashboardNavigator" 
                component={DashboardNavigator} 
                options={{
                    title:"Dashboard",
                    tabBarIcon: ({ focused }) => (
                        <View>
                            <Entypo name="list" size={24} color={focused ? Colors.buttonBackGround : Colors.backGround} />
                        </View>
                    )
                }}
            />
           
            
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    tabStyle: {
        position: 'absolute',
     //   height:60

    }
})

export default TabNavigator