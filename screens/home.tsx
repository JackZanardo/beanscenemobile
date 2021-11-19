import React from "react";
import {ImageBackground, View, StyleSheet, Text} from 'react-native';
import {Button} from '../components/button';

export function Home({ navigation }: any) {

    function GoToSittings(){
        navigation.navigate('Sittings');
    }

    //TODO: Styling Text and Button components
    return (
        <View style={styles.container}>
            <ImageBackground source={require('../assets/tablesMobile.png')} resizeMode="cover" style={styles.image}>
                <View style={styles.innerContainer}>
                    <Text style={styles.text}>
                        Bean Scene
                    </Text>
                    <Button title={"Sittings List"} onPress={GoToSittings} color="#bc7be8" style={styles.button}/>
                </View>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        flex: 1,
        justifyContent: "center",
        width: 400,
        height: 800,
    },
    button: {
        alignItems: 'center',
        textAlign: "center",
        width: 150,
        height: 50,
    },
    innerContainer:{
        justifyContent: "center",
        alignItems: 'center',
        flex: 1,
    },
    text: {
        color: "white",
        fontSize: 42,
        lineHeight: 84,
        fontWeight: "bold",
        textAlign: "center",
        backgroundColor: "#000000c0"
    }
});