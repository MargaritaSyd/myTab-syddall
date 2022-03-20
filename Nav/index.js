import React , {useState} from 'react';
import { useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './TabNavigator';
import AuthNavigator from './AuthNavigator';

function MainNavigator() {
    const isAuthenticated = useSelector(state => state.auth.token)

    return (
        <NavigationContainer>
            {isAuthenticated
            ?  <TabNavigator />
            : <AuthNavigator />
            }
            
        </NavigationContainer>
    )
}

export default MainNavigator