import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { Header } from '../../Components'
import Icon from 'react-native-vector-icons/FontAwesome';

class DetailsScreen extends Component{
    render() {
        console.log(this.props);
        const { id, name, year } = this.props.navigation.state.params;
        const { navigation } = this.props;


        return (
            <View style={styles.box}>
                <Header onPress={() => navigation.goBack() }/>
                <Text>
                    ID: { id }
                </Text>
                <Text>
                    Name: {name}
                </Text>
                <Text>
                    Year: {year}
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    box: {
        flex: 1,
        justifyContent: 'space-around',
    }});

export default  DetailsScreen;
