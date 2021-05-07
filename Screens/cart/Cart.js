import React, { Component } from 'react';
import { useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icons from "react-native-vector-icons/Ionicons";

import {Text, View, StyleSheet, FlatList, Image, Button,StatusBar, TouchableOpacity, TextInput} from 'react-native';
import Card from "./Card"




export  default class Cart extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             data: [],
             refreshing : true
        }
    }

    componentDidMount(){
        this.fetchProducts();
    }

    fetchProducts() {
        this.setState({ refreshing: true });
        fetch('https://storeway-app.herokuapp.com/api/v1/products')
            .then(res => res.json())
            .then(resJson => {
                this.setState({ data: resJson.data.products });
                this.setState({ refreshing: false });
                // console.log(resJson.data.products)
            }).catch(e => console.log(e));
    }

    
    
    renderItemComponent = (data) => {
        return (
      <View>
        <Card>
            <View  >
                <View style={{flexDirection: 'row'}} >
                    <View style={styles.imageSec} >
                        <Image  
                        style={{height: 50,width: 50}}
                        source= {{uri: data.item.productImage}}
                        />
                    </View>
                    <View style={styles.itemDesc} >
                        <View  style={styles.nameContainer} >
                            <Text style={styles.Name}> {data.item.name}</Text>
                        </View>
                        <View style={styles.itemDetails}>
                            <View style={styles.quantityLogo} >
                                <View style={{justifyContent: 'center'}}>
                                    <Text style={styles.itemtext}>Quantity:  </Text>
                                </View>
                                
                                <View style={{justifyContent: 'center'}} >
                                    <TextInput style={styles.quantity} keyboardType='numeric' />
                                    {/* <Text style={styles.quantity} >{data.item.quantity}</Text> */}
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
            {/* <StatusBar backgroundColor="#9E90A2" barStyle="light-content" /> */}
            <View  style={styles.Heading}>    
                 <View style={{position: 'absolute', left: 1,opacity: 0.4,}} >
                    <Icons.Button name="arrow-back" size={25} backgroundColor="#9E90A2" color="crimson"
                        onPress={() => this.props.navigation.navigate("AllProducts")}></Icons.Button>
                </View>
                <Icon name='shopping-cart' color='crimson'  size={20} ></Icon>           
                <Text style={styles.HeadingText} >Cart</Text>
            </View>
            <FlatList 
            data={this.state.data}
            renderItem={(item)=>this.renderItemComponent(item)}
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
                <Button title="Pay Online" color="skyblue" onPress={() => this.props.navigation.push('Cart')} />
            </View>
            
            
        </View>
    )
}
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    //   alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#9E90A2'
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
        // alignItems: 'center',
        // justifyContent: "center"
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
        height: 80,
        width: 80,

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
    },
    bottom:{
        backgroundColor: '#F1F0FF'
    },
    quantityLogo:{
        flexDirection: 'row'
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
        borderColor: 'white',
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
