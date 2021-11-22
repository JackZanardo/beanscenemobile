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
            <Button title="All Sittings" onPress={() => onClick("")} color="#6ec6f0" style={styles.buttonAllSittings} textStyle={{ fontSize: 26 }}/>
            <Button title="Search Date" onPress={showDatePicker} color="#6ec6f0" style={styles.buttonSearch} textStyle={{ fontSize: 26 }}/>
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
        flexDirection: 'row',
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
    },
    buttonAllSittings: {
        alignItems: 'center',
        justifyContent: "center",
        width: 196.5,
        height: 75,
        marginEnd: 1
    },
    buttonSearch: {
        alignItems: 'center',
        justifyContent: "center",
        width: 195,
        height: 75,
    },

});