import React, {Component} from 'react';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';

const List = ({data}) => {
    console.log(data);
    return (
            <Text>
                {data.name}
            </Text>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    block: {
        backgroundColor: 'green',
        width: 60,
        height: 60,
    },
    text : {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    }
});

export {List};