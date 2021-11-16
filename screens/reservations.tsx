import React, {useState, useEffect} from "react";
import {View, Text, FlatList, ScrollView} from "react-native";
import {SearchReservations} from '../services/reservationservice';


function ReservationItem({item}: any){
    return (
        <View>
            <Text>Start: {item.Start}</Text>
            <Text>Customer Number: {item.CustomerNum}</Text>
        </View>
    );
}

export function Reservations( { route, navigation }: any ){
    const sittingId = route.sittingId;
    const [reservations, setReservations] = useState<any[]>([]);

    useEffect(() =>{
        GetReservations(sittingId);
    },[reservations])

    function GetReservations(sittingId: number){
        SearchReservations(sittingId).then(data => setReservations(data));
    }

    function renderReservationItems({item}: any){
        return(
            <ReservationItem item={item} />
        );
    }


    return (
        <ScrollView>
            <FlatList data={reservations} renderItem={renderReservationItems} keyExtractor={item => item.Id} />
        </ScrollView>
    );
}