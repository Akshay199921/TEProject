import React from 'react'
import { Button, ImageBackground, StyleSheet, Text, TextInput, View ,Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icons from "react-native-vector-icons/Ionicons";

const image = require("../../assets/payment1.png")
const image2 = require("../../assets/payment2.jpg")

function AfterPayOnline({navigation}) {
    return (
        <View style={styles.container}>
            <View style={styles.Heading}>
                <View style={{position: 'absolute', left: 1,opacity: 0.4,}} >
                    <Icons.Button name="arrow-back" size={25} backgroundColor="#9E90A2" color="crimson"
                        onPress={() => navigation.navigate("Cart") }></Icons.Button>

                </View>
                <Icon name='payment' color='crimson'  size={20} ></Icon>
                <Text style={styles.HeadingText}>Payment Screen</Text>
            </View>
            <View style={styles.paymenthead}>
                <Text style={{fontWeight: 'bold',color: '#fff', fontSize: 16}} >Payment Method</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
                <Image source={image} style={{width: 100,height: 75,marginHorizontal: 10}} />
                <Image source={image2} style={{width: 200,height: 60}} />
            </View>

                <View style={styles.body}>
                    <View style={{margin: 10}}>
                        <View style={{justifyContent:'center',margin: 2}}>
                            <Text style={{fontWeight:'bold',color: '#687de3'}} >CardNo. :</Text>
                        </View>
                        <TextInput placeholder="1234-5678-9012" style={styles.textInput} keyboardType="numeric" />
                    </View>
                    <View style={{flexDirection: 'row',marginTop: 10}}>
                        <View style={{justifyContent:'center',margin: 2}}>
                            <Text style={{fontWeight:'bold',color: '#687de3'}} >Expiry Date :</Text>
                        <TextInput placeholder="mm/yy" style={styles.textInput} keyboardType="numeric" />
                        </View>
                        <View style={{justifyContent:'center',margin: 2}}>
                            <Text style={{fontWeight:'bold',color: '#687de3'}} >CVV :</Text>
                        <TextInput placeholder="123" style={styles.textInput} keyboardType="numeric" />
                        </View>
                    </View>
                    <View style={{margin: 10}}>
                        <View style={{justifyContent:'center',margin: 2}}>
                            <Text style={{fontWeight:'bold',color: '#687de3'}} >Card Holder's Name :</Text>
                        </View>
                        <TextInput placeholder="Akshay A Motiyani" style={styles.textInput}  />
                    </View>
                </View>
            
            <Button  title="Confirm" color="#26d466" />
        </View>
    )
}

export default AfterPayOnline

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    Heading:{
        backgroundColor: '#9E90A2',
        padding: 5,
        alignItems:'center',
        flexDirection:'row',
        justifyContent: 'center',
        opacity: 0.7
    },
    HeadingText:{
        borderBottomColor: 'crimson',
        borderBottomWidth: 3,
        fontSize: 20,
        color: 'black',
        padding: 5,
        fontWeight: 'bold'
    },
    body:{
        marginHorizontal: 4,
        marginVertical: 10,
        borderRadius: 6,
        elevation: 5,
        backgroundColor: '#f5f5f5',
        shadowOffset: {width: 1, height: 1},
        shadowColor: '#333',
        shadowOpacity: 0.3,
        shadowRadius: 2,
        padding: 10,
        // height: "50%",
        alignItems: 'center',
    },
    textInput:{
        borderWidth: 1,
        borderColor: "gray",
        paddingHorizontal: 20,
        paddingVertical: 5,
        borderRadius: 3,
        fontSize: 18

    },
    paymenthead:{
        alignItems: 'center',
        backgroundColor: '#fcba03',
        padding: 10
    }
  });
  