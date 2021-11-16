import React, {useState} from "react";
import {View, Text, TouchableOpacity, FlatList, ScrollView} from 'react-native';
import {SearchHeader} from "../components";
import {AllSittings, SearchSittings} from "../services/sittingservice";
import {SearchReservations} from "../services/reservationservice";
import {createNativeStackNavigator} from "react-native-screens/native-stack";
import { NavigationContainer } from '@react-navigation/native';



export function Sittings({ navigation }: any){

    const [sittings, setSittings] = useState<any[]>([]);

    function SittingItem({item}: any){
        return(
            <TouchableOpacity onPress={() => GoToReservations(item.Id)}>
                <Text>Open: {item.Open}</Text>
                <Text>Available: {item.Available}</Text>
                <Text>Sitting Type: {item.SittingType.Name}</Text>
                <Text>Restaurant: {item.Restaurant.Name}</Text>
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
            SearchSittings(searchDate).then(data => setSittings(data))
        }
    }

    function renderSittingItem({item}: any){
        return (
            <SittingItem item={item} />
        );
    }

    return (
        <View>
            <SearchHeader onClick={searchOrGet}/>
            <ScrollView>
                <FlatList data={sittings} renderItem={renderSittingItem} keyExtractor={item => item.Id}/>
            </ScrollView>
        </View>
    );
}