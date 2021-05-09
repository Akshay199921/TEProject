import React from 'react'
import { StyleSheet, Text, View , Dimensions, Image, TouchableOpacity,  } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import * as Animatable from 'react-native-animatable';

const ImageLogo = require("../assets/logo3.png")

function SplashScreen({navigation}) {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Animatable.Image 
                animation="bounceInRight"
                duration={1500}

                source={ImageLogo}
                style={styles.logo}
                resizeMode="stretch"
                />
            </View>
            <Animatable.View style={styles.footer} animation="fadeInUpBig" duration={2500} >
                <Text style={styles.title}>Provide Permission to move forward</Text>
                <Text style={styles.text} >Sign In to your account</Text>
                
                <View style={styles.button}>
                    <TouchableOpacity onPress={()=>navigation.navigate('SignInScreen')}>
                        <LinearGradient
                        colors={['#EAC5D8','#01ab9d']}
                        style={styles.signIn}
                        >
                            <Text style={styles.textSign} >Get Started</Text>
                            <MaterialIcons 
                            name="navigate-next"
                            color="#fff"
                            size={20}
                            />
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
                

            </Animatable.View> 
            
            
        </View>
    )
}

export default SplashScreen


  const {height} = Dimensions.get("screen");
  const width_logo = height * 0.28;
  const height_logo = height * 0.40;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#9E90A2'
    },
    header: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    footer: {
        flex: 1,
        backgroundColor: '#355C7D',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 50,
        paddingHorizontal: 30
    },
    logo: {
        width:  width_logo,
        height: height_logo,
        borderRadius: 6,
    },
    title: {
        color: '#B5FFE1',
        fontSize: 30,
        fontWeight: 'bold'
    },
    text: {
        color: 'grey',
        marginTop:5
    },
    button: {
        alignItems: 'flex-end',
        marginTop: 30
    },
    signIn: {
        width: 150,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        flexDirection: 'row'
    },
    textSign: {
        color: 'white',
        fontWeight: 'bold'
    }
  });