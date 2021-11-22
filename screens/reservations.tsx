import React, {useState, useEffect} from "react";
import {View, Text, FlatList, ImageBackground, StyleSheet} from "react-native";
import {SearchReservations} from '../services/reservationservice';


function ReservationItem({item}: any){
    return (
        <View style={styles.listItem}>
            <Text style={styles.text}>Start: {item.Start}</Text>
            <Text style={styles.text}>Customer Number: {item.CustomerNum}</Text>
            <Text style={styles.text}>Status: {item.ReservationStatus}</Text>
            <Text style={styles.text}>Person: {item.Person.FirstName} {item.Person.LastName}</Text>
        </View>
    );
}

//TODO: Styling Flatlist and Flatlist Items
export function Reservations( {route, navigation }: any ){
    const sittingId = route.params.sittingId;
    const [reservations, setReservations] = useState<any[]>([]);

    useEffect(() =>{
        GetReservations(sittingId);
    },[])

    function GetReservations(sittingId: number){
        SearchReservations(sittingId).then(data => setReservations(data));
    }

    function renderReservationItems({item}: any){
        return(
            <ReservationItem item={item} />
        );
    }


    return (
        <View style={styles.container}>
            <ImageBackground source={require('../assets/tablesMobile.png')} resizeMode="cover" style={styles.image}>
                <View style={styles.innerContainer}>
                    <FlatList data={reservations} renderItem={renderReservationItems} keyExtractor={item => item.Id} />
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