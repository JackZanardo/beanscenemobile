import React, {useState} from 'react';
import { StyleSheet, View } from 'react-native';
import {Button} from './button';
import DateTimePickerModal from "react-native-modal-datetime-picker";

type HeaderProps = {
    onClick(searchTerm: string): void;
}

//TODO: Styling of search header
export function SearchHeader({onClick}: HeaderProps) {
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date: any) => {
        let dateString = ToDateString(date);
        handleSearch(dateString);
        hideDatePicker();
    };

    const handleSearch = (dateString: string) => {
        onClick(dateString);
    }

    function ToDateString(date: Date) {
        let ds = date.getFullYear().toString();
        ds += '-' + (date.getMonth() + 1).toString();
        if(date.getDate() <= 9){
            ds += '-0' + date.getDate().toString();
        }
        else{
            ds += '-' + date.getDate().toString();
        }
        return ds;
    }


    return (
        <View style={styles.container}>
            <Button title="All Sittings" onPress={() => onClick("")} color="#30db5e" />
            <Button title="Search Date" onPress={showDatePicker} color="#bc7be8"/>
            <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
            />
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