import React from 'react';
import { Button, StyleSheet, Text, View, Dimensions, FlatList,Image } from 'react-native';
import Icons from "react-native-vector-icons/Ionicons";
import * as Animatable from 'react-native-animatable';

import Card from "../cart/Card";

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

const img1 = require("../../assets/amulbutter.png")
const img2 = require("../../assets/amulmilk.png")
const img3 = require("../../assets/smilebaal.png")
const img4 = require("../../assets/Akshay.jpg")

const smartShopImage = require("../../assets/smart1.jpg")

const Products  = [
    {
        id: "1",
       name: 'Amul Butter',
       image: img1

    },
    {
        id: '2',
       name: 'Amul Milk',
       image: img2,
    },
    {
        id: '3',
       name: 'Smile Ball',
       image: img3,
    },
    {
        id: '4',
       name: 'Akshay',
       image: img4,
    },
]

const renderRecommendedItemComponent = ({item}) =>{
    return (
        <Card>
        <View style={styles.RecommendedProductContainer} >
            <View>
                <View style={styles.imageSec} >
                <Image source={item.image} style={{height: 130,width: 130,borderWidth: 1,borderColor: 'green'}} />
                </View>
                <View style={styles.RecommendedProductName}>
                    <Text  style={styles.RecommendedProductText}>{item.name}</Text>
                </View>
            </View>
        </View>
        </Card>
        
    )
}

function RecommendedProducts({navigation}) {
    return (
        <View  style={styles.container}>
            <View style={styles.Heading}>
                    <Icons name="ios-book-outline" size={25}  color="crimson" />
                    <Text style={styles.HeadingText}>Welcome</Text>
            </View>
        <View>
            <Animatable.View style={styles.recommendations} animation='bounceInRight' >
                <View style={styles.textCategory}>
                    <Text style={styles.textCategoryText} >Recommended Products</Text>
                </View>
                <Animatable.View  animation='bounceInRight' duration={3500}> 
                    <FlatList 
                    data={Products}
                    horizontal
                    renderItem={renderRecommendedItemComponent}
                    />

                </Animatable.View>
            </Animatable.View>

            <Animatable.View style={styles.Offers} animation='bounceIn'>
                <Image source={smartShopImage} style={{width: Width, height: Height/3}} />
            </Animatable.View>
        </View>
            <View style={styles.footer}>
                <View>
                    <Button title="Show All Products" color="#10564F" onPress={()=>navigation.navigate("AllProducts")} />
                </View>
            </View>
        </View>
    )
}

export default RecommendedProducts

const styles = StyleSheet.create({
    container: {
      flex: 1,  
      backgroundColor: '#DEDEDE',

    },Heading:{
        backgroundColor: '#9E90A2',
        opacity: 0.7,
        alignItems: 'center',
        marginHorizontal: 1,
        padding: 5,
        justifyContent: 'center',
        flexDirection: 'row',
        borderRadius: 2
       
        
    },
    HeadingText:{
        fontWeight: 'bold',
        fontSize: 24,
        color: '#333',
        borderBottomWidth: 2,
        borderBottomColor: 'crimson',
        
    },
    recommendations:{
        width: Width,
        height: Height/3,
        backgroundColor: 'white',
        marginVertical: 30,
        justifyContent: 'center',
        borderBottomRightRadius: 15,
        borderTopRightRadius: 15,
    },
    Offers:{
        width: Width,
        height: Height/3,
        backgroundColor: '#FFF',
        marginVertical: 30,
        justifyContent: 'center',
        borderBottomRightRadius: 15,
        borderTopRightRadius: 15
    },
    footer:{
        position: 'absolute',
        bottom: 0.5,
        width: '100%'
    },
    imageSec:{
        marginBottom: 5
    },
    RecommendedProductName:{
        alignItems: 'center',
        borderTopWidth: 2,
        borderTopColor: 'crimson'
    },
    RecommendedProductText:{
        // fontWeight: 'bold',
        fontSize: 18,
        color: '#54627B'
    },
    textCategory:{
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: 'red'
    },
    textCategoryText:{
        color: '#DE847B',
        fontSize: 24,
    }
  });
  