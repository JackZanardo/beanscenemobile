import React, {useState} from "react";
import {View, Text, TouchableOpacity, FlatList, ImageBackground, StyleSheet} from 'react-native';
import {Button, SearchHeader} from "../components";
import {AllSittings, SearchSittings} from "../services/sittingservice";

//TODO: Styling Flatlist and Flatlist Items
export function Sittings({ navigation }: any){

    const [sittings, setSittings] = useState<any[]>([]);

    function SittingItem({item}: any){
        return(
            <TouchableOpacity onPress={() => GoToReservations(item.Id)} style={styles.listItem}>
                <Text style={styles.text}>Open: {item.Open}</Text>
                <Text style={styles.text}>Available: {item.Available}</Text>
                <Text style={styles.text}>Sitting Type: {item.SittingType.Name}</Text>
                <Text style={styles.text}>Restaurant: {item.Restaurant.Name}</Text>
            </TouchableOpacity>
        );
    }

    function GoToReservations(itemId: number){
        navigation.navigate('Reservations', {sittingId: itemId});
    }

    function searchOrGet(searchDate: string){
        if(searchDate == ""){
            AllSittings().then(data => setSittings(data));
        }
        else {
            SearchSittings(searchDate).then(data => setSittings(data));
        }
    }

    function renderSittingItem({item}: any){
        return (
            <SittingItem item={item} />
        );
    }

    return (
        <View style={styles.container}>
            <ImageBackground source={require('../assets/tablesMobile.png')} resizeMode="cover" style={styles.image}>
                <View style={styles.innerContainer}>
                    <FlatList data={sittings} renderItem={renderSittingItem} keyExtractor={item => item.Id}/>
                </View>
                <SearchHeader onClick={searchOrGet} />
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
    innerContainer:{
        justifyContent: "center",
        alignItems: 'center',
        flex: 1,
    },
    text: {
        color: "#000",
        fontSize: 18,
        fontWeight: "bold",
    },
    listItem: {
        backgroundColor: "#fff",
        paddingTop: 5,
        paddingBottom: 5,
        paddingHorizontal: 10,
        marginTop: 0.5,
        marginBottom: 0.5,
        borderRadius: 10
    }
});