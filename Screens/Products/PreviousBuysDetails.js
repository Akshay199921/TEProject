import React, { Component } from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icons from "react-native-vector-icons/Ionicons";

import {Text, View, StyleSheet, FlatList, Image, Button,StatusBar, TouchableOpacity, TextInput} from 'react-native';
import Card from "../cart/Card"

const img1 = require("../../assets/amulbutter.png")
const img2 = require("../../assets/amulmilk.png")

export class PreviousBuysDetails extends Component {
    constructor(props) {
        super(props)
    }
    id = this.props.route.params;

    ProductDetails= [
        {
            id: "1",
           name: 'Amul Butter',
           image: img1,
           weight: '100gm',
           Price: "35 Rs",
           quantity: 2

        },
        {
            id: '2',
           name: 'Amul Milk',
           image: img2,
           weight: '1L',
           Price: "20 Rs",
           quantity: 5

        },


    ]

    renderItemComponent = ({item}) => {
        return (
      <View>
        <Card>
            <View  >
                <View style={{flexDirection: 'row'}} >
                    <View style={styles.imageSec} >
                        <Image  
                        style={{height: 50,width: 50}}
                        source= {item.image}
                        />
                    </View>
                    <View style={styles.itemDesc} >
                        <View  style={styles.nameContainer} >
                            <Text style={styles.Name}> {item.name}</Text>
                        </View>
                        <View style={styles.itemDetails}>
                            <View style={styles.quantityLogo} >
                                <View style={{justifyContent: 'center'}}>
                                    <Text style={styles.itemtext}>Weight: {item.weight} </Text>
                                </View>
                                <View style={{justifyContent: 'center'}}>
                                    <Text style={styles.itemtext}>Quantity: {item.quantity} </Text>
                                </View>
                                <View style={{justifyContent: 'center'}}>
                                    <Text style={styles.itemtext}>Price: {item.Price} </Text>
                                </View>
                                
                                
                            </View>
                        </View>
                                              
                         
                    </View>
                    
                </View>  
            
            </View>               
        </Card>
      </View>
     
       

        
        )
        
    }


    render() {
        return (
            <View style={styles.container} >
            <View  style={styles.Heading}>    
                 <View style={{position: 'absolute', left: 1,opacity: 0.4,}} >
                    <Icons.Button name="arrow-back" size={25} backgroundColor="#9E90A2" color="crimson"
                        onPress={() => this.props.navigation.goBack()}></Icons.Button>
                </View>
                <Icon name='shopping-cart' color='crimson'  size={20} ></Icon>           
                <Text style={styles.HeadingText} >Previous Order Detail</Text>
                
            </View>
            <FlatList 
            data={this.ProductDetails}
            renderItem={this.renderItemComponent}
            keyExtractor={item => item.id}
            />
            <View style={styles.amountContainer}>
                    
                <View  style={{flexDirection: 'row'}} >
                    <Text style={styles.amountText} >Total Amount:  </Text> 
                    <Text style={styles.amountText} >5000</Text>
                </View>
                <View  style={{flexDirection: 'row'}} >
                    <Text style={styles.quantityText} >Total Quantity:</Text>
                    <Text style={styles.quantityText} >15</Text>
                </View>
            </View>
            <View style={styles.bottom}>
                <Button title="Buy Again" color="skyblue" onPress={() => this.props.navigation.push('Cart')} />
            </View>
            
            
        </View>
        )
    }
}


export default PreviousBuysDetails

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
    //   alignItems: 'center',
      justifyContent: 'center',
    //   backgroundColor: '#9E90A2'
    },
    Heading:{
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 5,
        // marginHorizontal: 5,
        opacity: 0.7,
        flexDirection: 'row'

    },
    HeadingText:{
        // borderLeftColor: 'crimson',
        // borderRightColor: 'crimson',
        borderBottomColor: 'crimson',
        borderBottomWidth: 3,
        // borderLeftWidth: 3,
        // borderRightWidth: 3,
        fontSize: 20,
        color: 'black',
        padding: 5,
        fontWeight: 'bold'

    },
    itemDesc: {
        marginLeft: 5,
        // borderWidth: 1,
        padding: 5,
        width: 200,
        flexDirection: 'row'
        
    },
    itemtext:{
        fontWeight: 'bold',
        color: 'green',
        textTransform: "uppercase",
        color: '#333',
        marginLeft: 5,

    },
    itemDetails:{

    },
    imageSec: {
        // borderWidth: 1,
        borderColor: 'black',
        padding: 5,
        borderRadius: 6,
        elevation: 5,
        backgroundColor: '#FFF',
        shadowOffset: {width: 1, height: 1},
        shadowColor: '#333',
        shadowOpacity: 0.3,
        shadowRadius: 2 ,
        height: 60,
        width: 60,

    },
    button:{
        marginTop: 5,
    },
    nameContainer:{
        width: 100
    },
    Name:{
        fontSize: 15,
        fontWeight: 'bold',
        color: '#333',
        color: 'green'
    },
    bottom:{
        backgroundColor: '#F1F0FF'
    },
    quantityLogo:{
        flexDirection: 'column'
    },
    icon:{
        borderWidth: 1,
        borderColor: 'crimson',
        margin: 4,
        alignItems: 'center',
        backgroundColor: 'gray'
    },quantity:{
        fontWeight: 'bold',
        fontSize: 18,
        color: 'green',
        borderBottomWidth: 3,
        borderBottomColor: '#333',
        backgroundColor: 'white'
    },
    amountContainer:{
        alignItems: 'flex-end',
        marginHorizontal: 5,
        marginVertical: 10,
        backgroundColor: '#A3C1AD',
        borderWidth: 1,
        borderColor: '#333',
        padding: 10
    },
    amountText:{
        fontWeight: 'bold',
        fontSize: 20,
        color: '#FFF'

    },
    quantityText:{
        fontWeight: 'bold',
        fontSize: 15,
        color: '#FFF',
        marginRight: 33
    }
})
