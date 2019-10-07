import React, {Component} from 'react';
import { StyleSheet, Text, View, Button, ScrollView, TouchableOpacity } from 'react-native';

const List = ({data, onPress}) => {
    return (
           <TouchableOpacity onPress={onPress}>
               <Text style={styles.item}>
                   {data.name}
               </Text>
           </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    item: {
        textAlign: 'center',
        padding: 10,
        margin: 10,
        backgroundColor: 'lightgreen',
    },
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
