import React, {Component} from 'react';
import {StyleSheet, Text, View, Button, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {h, w} from '../../constants';


const Header = ({onPress, leftIcon}) => {
    console.log(this.props);
    return (

        <View style={styles.header}>
            <TouchableOpacity onPress={onPress} style={styles.flex}>
                <Ionicons name={leftIcon} style={styles.IconSize}/>
                <Text style={styles.text}>Назад</Text>
            </TouchableOpacity>
        </View>


    )
}

const styles = StyleSheet.create({
    flex: {
        display: 'flex',
        justifyContent: 'flex-start',
        flexDirection: 'row',
    },
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
        paddingTop: 20,
        color: '#000',
        fontWeight: 'bold',
        fontSize: 16,
        marginLeft: 20,

    }
});

export {Header};
