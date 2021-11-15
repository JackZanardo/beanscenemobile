import React from "react";
import {View, Text} from 'react-native';
import {SearchHeader} from "../components";


export function Sittings(){

    function search(){

    }


    return (
        <View>
            <SearchHeader onClick={search}/>
        </View>
    );
}