import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { Header } from '../../Components'
import { h, w } from '../../constants';

class DetailsScreen extends Component{
    render() {
        console.log(this.props);
        const { id, name, year } = this.props.navigation.state.params;
        const { navigation } = this.props;

        const { item, backButton} = styles;
        return (
            <View>
                <Header
                    onPress={() => navigation.goBack() }
                    leftIcon={'ios-arrow-back'}
                />
               <View style={styles.box}>
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
            </View>
        )
    }
}

const styles = StyleSheet.create({
    box: {
        marginLeft: w / 3,
        marginRight: w / 3,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
    },
    });

export default  DetailsScreen;
