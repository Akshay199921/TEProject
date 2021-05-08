import React, { Component } from 'react'
import {Text, View, StyleSheet, FlatList, Image, Button,StatusBar, TouchableOpacity, TextInput} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import Icons from "react-native-vector-icons/Ionicons";

import Card from "../cart/Card"

export class PreviousBuys extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             data: [],
        }
    }
    PreviousBuys = [
        {
            id: "1234567",
            Total_Amount: 5000 ,
            Date: '12/05/2020'
        },
        {
            id: "5565862",
            Total_Amount: 1500 ,
            Date: '06/05/2020'
        },
        {
            id: "98729",
            Total_Amount: 2000 ,
            Date: '10/12/2020'
        }
    ]
    // componentDidMount(){
    //     this.fetchProducts();
    // }

    // fetchProducts() {
    //     this.setState({ refreshing: true });
    //     fetch('https://storeway-app.herokuapp.com/api/v1/products')
    //         .then(res => res.json())
    //         .then(resJson => {
    //             this.setState({ data: resJson.data.products });
    //             this.setState({ refreshing: false });
    //             // console.log(resJson.data.products)
    //         }).catch(e => console.log(e));
    // }


    renderItemComponent = ({item}) => {
        return (
            
      <View>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('PreviousBuysDetails')}>
            <Card>  
                    <View>
                        <View style={styles.itemDesc} >
                            <View style={styles.itemDetails}>
                                <View style={styles.quantityLogo} >
                                    <View style={{justifyContent: 'center'}}>
                                        <Text style={styles.itemtext}>OrderId:  {item.id}  </Text>
                                    </View>
                                    <View style={{justifyContent: 'center'}}>
                                        <Text style={styles.itemtext}>Date: {item.Date}  </Text>
                                    </View>
                                </View>
                            </View>
                        </View>

                        <View>
                            <View style={{justifyContent: 'center',marginLeft: 11}}>
                                <Text style={styles.itemtext}>Total Amount: {item.Total_Amount}  </Text>
                            </View>
                        </View>
                    </View>
                                       
                </Card>
          </TouchableOpacity>
        
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
                        <Icon name='preview' color='crimson'  size={20} ></Icon>           
                        <Text style={styles.HeadingText} >Previous Buys</Text>
                    </View>
                    <FlatList 
                    data={this.PreviousBuys}
                    renderItem={this.renderItemComponent}
                    keyExtractor={item => item.id}
            />
            
            </View>
           
            
        )
    }
}

export default PreviousBuys


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
        flexDirection: 'row',

        
    },
    itemtext:{
        fontWeight: 'bold',
        color: 'green',
        textTransform: "uppercase",
        // color: '#333',
        marginLeft: 5,

    },
    itemDetails:{
        alignItems: 'center',
        justifyContent: "center"
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
