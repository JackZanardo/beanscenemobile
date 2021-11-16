import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Sittings, Reservations} from "../screens";

const Stack = createNativeStackNavigator();

export function Navigation(){
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Sittings">
                <Stack.Screen name="Sittings" component={Sittings} />
                <Stack.Screen name="Reservations" component={Reservations} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}