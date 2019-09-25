import React, {Component} from 'react';
import {StyleSheet, Text, View, Button, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {h, w} from '../../constants';


const Header = ({onPress, leftIcon}) => {
    console.log(this.props);
    return (

        <View style={styles.header}>
            <TouchableOpacity onPress={onPress}>
                <Ionicons name={leftIcon} style={styles.IconSize}/>
                <Text style={styles.text}>Назад</Text>
            </TouchableOpacity>
        </View>


    )
}

const styles = StyleSheet.create({
    header: {
        height: h / 6,
        backgroundColor: '#30d0fe',
        display: 'flex',
        justifyContent: 'space-around',
        flexDirection: 'column',
    },
    IconSize: {
        paddingTop: 20,
        paddingLeft: 20,
        fontSize: 24,
        textAlign: 'left'
    },
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
    text: {
        color: 'red',
        fontWeight: 'bold',
        fontSize: 16,

    }
});

export {Header};
