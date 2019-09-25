import React, {Component} from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

const Header = ({login, name}) => {
    console.log(this.props);
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Это хедер</Text>
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