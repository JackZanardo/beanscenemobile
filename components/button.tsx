import React from 'react';
import {TouchableOpacity,
    TouchableHighlight,
    View,
    Text,
    StyleSheet,
    ViewStyle,
    TextStyle} from "react-native";

type ButtonProps = {
    title: string;
    color?: string;
    onPress(): void;
    style?: ViewStyle;
    textStyle?: TextStyle;
    type?: 'highlight';
}

export function Button(props: ButtonProps){
    const {title, onPress, color, style, textStyle, type} = props;

    function Body() {
        return (
            <View style={[styles.button, style, {backgroundColor:color}]}>
                <Text style={[styles.buttonText, textStyle]}>{title}</Text>
            </View>
        );
    }

    if(type == 'highlight'){
        return (
            <TouchableHighlight onPress={onPress} activeOpacity={0.6} underlayColor='blue'>
                {Body()}
            </TouchableHighlight>
        );
    }
    else{
        return (
            <TouchableOpacity onPress={onPress}>
                {Body()}
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    button:{
        backgroundColor:'darkblue',
        borderRadius:3,
        paddingHorizontal:15,
        paddingVertical:5,
    },
    buttonText:{
        color:'white',
        fontWeight:'bold',
    },
});