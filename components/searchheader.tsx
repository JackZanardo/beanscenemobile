import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import {Button} from './button';

type HeaderProps = {
    onClick(searchTerm: string): void;
}

export function SearchHeader({onClick}: HeaderProps) {
    const [input, setInput] = useState("");

    function onPress(){
        onClick(input);
    }

    return (
        <View style={styles.container}>
            <TextInput onChangeText={setInput} value={input} style={styles.input}/>
            <Button title="Search" onPress={onPress} color='#432e82' />
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#e3cc66',
        paddingTop:30,
        paddingHorizontal:15,
        paddingBottom: 10,
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'center',
    },
    input:{
        backgroundColor: '#fff',
        borderStyle:'solid',
        borderWidth: 1,
        borderColor: '#000000',
        margin: 10,
        borderRadius:3,
        paddingHorizontal:15,
        paddingVertical:5,
    }

});