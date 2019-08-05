import React, {Component} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const Login = ({login, name}) => {
    return (
    <View style={styles.container}>
        <Text style={styles.text}>{login ? 'Вы авторизованы: '+name : 'Вы не авторизованы!'}</Text>
    </View>
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
        color: 'red',
        fontWeight: 'bold',
        fontSize: 16,
    }
});

export default Login;