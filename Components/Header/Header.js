import React, {Component} from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Header = ({ onPress }) => {
    console.log(this.props);
    return (

            <View style={styles.container}>
                <TouchableOpacity onPress={onPress}>
                    <Ionicons name={leftIcon}/>
                <Text style={styles.text}>Это хедер</Text>
                </TouchableOpacity>
            </View>


    )
}


const styles = StyleSheet.create({
    container: {
        flex: 3,
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
        color: 'red',
        fontWeight: 'bold',
        fontSize: 16,
    }
});

export {Header};
