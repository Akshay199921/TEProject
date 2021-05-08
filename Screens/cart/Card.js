import React, { Component } from 'react'
import { Button, StyleSheet, Text, View, } from 'react-native';
// import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';



export default class Card extends Component {
    render() {
        return (
        <View style={styles.card}>
            <View style={styles.cardContent}>
                { this.props.children  }
            </View>
        </View>
        )
    }
}



const styles = StyleSheet.create({
    card:{
        marginHorizontal: 4,
        marginVertical: 2,
        borderRadius: 6,
        elevation: 5,
        backgroundColor: '#f5f5f5',
        shadowOffset: {width: 1, height: 1},
        shadowColor: '#333',
        shadowOpacity: 0.3,
        shadowRadius: 2,
        padding: 5
    },
    cardContent:{
        marginHorizontal: 18,
        marginVertical: 10,
        marginLeft: 3
    }
})