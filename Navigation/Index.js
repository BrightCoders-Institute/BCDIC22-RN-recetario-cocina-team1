// Node modules
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screens
import mainpage from '../Views/mainpage/mainpage';
import pageInfo from '../Views/pageInfo/pageInfo';

const Stack = createNativeStackNavigator();

export const Navigation =() =>{
    return (
        <>
        <NavigationContainer>
            <Stack.Navigator>
                 <Stack.Screen name="Home" component={mainpage} options={{headerShown: false}}/>
                 <Stack.Screen name="Info" component={pageInfo} options={{headerShown: false}}/>
            </Stack.Navigator>
        </NavigationContainer>
        </>

    )

}