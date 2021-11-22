import React from "react";
import { ImageBackground, View, StyleSheet, Text } from 'react-native';
import { Button } from '../components/button';

export function Home({ navigation }: any) {

    function GoToSittings() {
        navigation.navigate('Sittings');
    }

    //TODO: Styling Text and Button components
    return (
        <View style={styles.container}>
            <ImageBackground source={require('../assets/tablesMobile.png')} resizeMode="cover" style={styles.image}>
                <View style={styles.innerContainerTitle}>
                    <Text style={styles.text}>
                        Bean Scene
                    </Text>
                </View>
                <View style={styles.innerContainerButton}>
                    <Button title={"Sittings List"} onPress={GoToSittings} color="#6ec6f0" style={styles.button} textStyle={{ fontSize: 26 }} />
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
        justifyContent: "center",
        width: 250,
        height: 75,
    },
    innerContainerTitle: {
        alignItems: 'center',
        textAlignVertical: "top",
        flex: 0.11,
        backgroundColor: "rgba(0, 0, 0, 1)"
    },
    innerContainerButton: {
        justifyContent: "center",
        alignItems: 'center',
        flex: 1,
    },
    text: {
        color: "white",
        fontSize: 52,
        fontWeight: "bold",
    }
});