import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';


import Details from '../screens/Details';
import Home from '../screens/Home';

const Stack = createStackNavigator();

const screenOptionStyle = {
    headerShown: false,
};

export default function HomeStackNavigator(){
    return(
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen name='Home' component={Home} />
            <Stack.Screen name='Details' component={Details} /> 
        </Stack.Navigator>
    );
}