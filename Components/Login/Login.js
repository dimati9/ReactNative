import React, {Component} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const Login = ({login, name}) => {
    console.log(this.props);
    return (
    <View style={styles.container}>
        <Text style={styles.text}>{login ? 'Вы авторизованы: '+name : 'Вы не авторизованы!'}</Text>
    </View>
    )
}


const styles = StyleSheet.create({
    container: {
        height: 40,
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
        lineHeight: 40,
    }
});

export {Login};