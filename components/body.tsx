import React, {useState} from "react";
import {View, Text, TouchableOpacity, FlatList, ImageBackground} from 'react-native';
import {Button} from '../components/button';

export function Body() {

    return (
        <View>
            <ImageBackground source={require('../assets/tablesMobile.png')} >

            </ImageBackground>
        </View>
    );
}