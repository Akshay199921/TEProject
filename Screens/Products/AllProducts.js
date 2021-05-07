import React, { Component } from 'react';
import { useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icons from "react-native-vector-icons/Ionicons";

import {Text, View, StyleSheet, FlatList, Image, Button,StatusBar} from 'react-native';
import ProductsCard from "./ProductsCard"
const image1 = require("../../assets/amulbutter.png")
const image2 = require("../../assets/amulmilk.png")
const image3 = require("../../assets/lays.png")
const image4 = require("../../assets/smilebaal.png")




export default class AllProducts extends Component {
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
        <ProductsCard>
            <View style={styles.listSection} >
                <View style={{flexDirection: 'row'}} >
                    <View style={styles.imageSec} >
                        <Image  
                        style={{height: 130,width: 100}}
                        source= {{uri: data.item.productImage}}
                        />
                    </View>
                    <View style={styles.itemDesc} >
                        <View  style={styles.nameContainer} >
                            <Text style={styles.Name}> {data.item.name}</Text>
                        </View>
                        <View>
                            <Text style={styles.itemtext} >price: {data.item.price}</Text>
                        </View>
                        <View>
                            <Text style={styles.itemtext} >Quantity: {data.item.quantity}</Text>
                        </View>
                        <View>
                            <Text style={styles.itemtext} >Category: {data.item.category}</Text>
                        </View>                        
                        <View style={styles.button}>
                            <Button title='Ad to cart' color='green' />
                        </View> 
                    </View>
                    
                </View>  
            
            </View>               
        </ProductsCard>
      </View>
     )
}



    render() {
        
        return (
            
        <View style={styles.container} >
            <View  style={styles.Heading}>  
                <View style={{position: 'absolute', left: 1,opacity: 0.4,}} >
                    <Icons.Button name="ios-menu" size={25} backgroundColor="#9E90A2" color="crimson"
                        onPress={() => this.props.navigation.openDrawer()}></Icons.Button>

                </View>
                <Icon name='auto-awesome' color='crimson'  size={20} ></Icon>
                <Text style={styles.HeadingText} >All Products</Text>
            </View>
            <FlatList 
            data={this.state.data}
            renderItem={(item)=>this.renderItemComponent(item)}
            keyExtractor={item => item.id}
            />
            <View style={styles.bottom}>
                <Button title="Go to cart" color="#800000" onPress={() => this.props.navigation.navigate('Cart')} />
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
        
    },
    itemtext:{
        fontWeight: 'bold',
        color: 'green',
        textTransform: "uppercase",
        color: '#333',
        marginLeft: 5

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
        height: 130,
        width: 100

    },
    button:{
        marginTop: 5,
    },
    Name:{
        fontSize: 15,
        fontWeight: 'bold',
        color: '#333',
        borderBottomWidth: 1,
        borderBottomColor: '#de5d83'
    },
    bottom:{
        backgroundColor: '#F1F0FF'
    }
})
