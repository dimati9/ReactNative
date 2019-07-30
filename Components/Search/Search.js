import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Search extends Component{

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>{this.props.Login ? 'Вы авторизованы: Дмитрий' : 'Вы не авторизованы!'}</Text>
            </View>
        );
    }
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
