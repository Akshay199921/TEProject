import React,{useState} from 'react'
import { StyleSheet, Text, View,TouchableOpacity,Dimensions,Platform, TextInput,StatusBar, ScrollView } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

import * as Animatable from 'react-native-animatable';
import {Formik} from 'formik';
import * as yup from 'yup';

import SignInForm from './SignInForm';


const SignInScreen = ({navigation})  =>{

    const [data,setData]= useState({
        email: '',
        password: '',
        checkTextInputChange: false,
        secureTextEntry: true
    })

    const textInputChange = (val) =>{
        if(val.length != 0){
            setData({
                ...data,
                email: val,
                checkTextInputChange: true
            })
        }else{
            setData({
                ...data,
                email: val,
                checkTextInputChange: false
            })
        }
    }
    const handlePasswordChange = (val) =>{
        setData({
            ...data,
            password: val
        })
    }

    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        })
    }

    const signInHandler = ()=>{
        navigation.navigate('AllProducts')
        
    }
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#9E90A2" barStyle="light-content" />
            <View style={styles.header}>
                <Text style={[styles.text_header,{alignSelf: 'center'}]}>Welcome</Text>
                <Text style={[styles.text_header,{alignSelf: 'center'}]}>Sign In</Text>
            </View>
            
            <Animatable.View style={styles.footer} animation="fadeInUpBig"  >
                {/* <SignInForm /> */}
                <Text style={styles.text_footer} >Email</Text>
                <View style={styles.action}>
                    <FontAwesome name="user-o" color="#05375a" size={20} /> 
                    <TextInput 
                    placeholder="Your Email"
                    onChangeText={(val) => textInputChange(val)}
                    style={styles.textInput}
                    autoCapitalize='none'
                    />
                    {data.checkTextInputChange? 
                    <Animatable.View
                    animation="bounceIn"
                    >
                        <Feather 
                        name="check-circle"
                        color="green"
                        size={20}
                        />
                    </Animatable.View>
                    
                    : null}
                </View>

                <Text style={[styles.text_footer,{marginTop: 35} ]} >Password</Text>
                <View style={styles.action}>
                    <Feather name="lock" color="#05375a" size={20} /> 
                    <TextInput 
                    placeholder="Your Password"
                    onChangeText={(val)=> handlePasswordChange(val)}
                    secureTextEntry={data.secureTextEntry ? true: false}
                    style={styles.textInput}
                    autoCapitalize='none'
                    />
                    <TouchableOpacity
                    onPress={updateSecureTextEntry}
                    >
                        {data.secureTextEntry ?
                        <Feather 
                        name="eye-off"
                        color="gray"
                        size={20}
                        />
                        : 
                        <Feather 
                        name="eye"
                        color="gray"
                        size={20}
                        />
}
                    </TouchableOpacity>
                </View>

                <TouchableOpacity  onPress={signInHandler}>
                    <View style={styles.button}>
                        <LinearGradient
                        colors={['gray','#9E90A2']}
                        style={styles.signIn}
                        >
                            <Text style={[styles.textSign,{color: '#fff'}]} >SignIn</Text>
                        </LinearGradient>
                    </View>
                </TouchableOpacity>

                {/* <TouchableOpacity onPress={()=>navigation.navigate('SignUpScreen')} > 
                    <View style={[styles.button,{marginTop: 15}]}>
                        <LinearGradient
                        colors={['#534b4f','#9E90A2']}
                        style={styles.signIn}
                        >
                            <Text style={{color: '#fff', fontWeight: 'bold'}} >Dont Have an Account</Text>
                            <Text style={[styles.textSign,{color: '#fff'}]} >SignUp Now</Text>
                        </LinearGradient>
                    </View>
                </TouchableOpacity> */}

                <TouchableOpacity onPress={()=>navigation.navigate('SignUpScreen')}
                style={[styles.signIn,{
                    borderColor: '#9E90A2',
                    borderWidth: 1,
                    marginTop: 15

                }]}
                > 
                    <Text style={{color: '#9E90A2', fontWeight: 'bold'}} >Dont Have an Account</Text>
                    <Text style={[styles.textSign,{color: '#9E90A2'}]} >SignUp Now</Text>   
                </TouchableOpacity>
                
                {/* <View style={styles.otherOptions}>
                    
                        <View style={styles.facebook}>
                            <TouchableOpacity onPress={()=>navigation.navigate('AfterFacebookLogin')} >
                                <Text style={styles.facebookText}>Sign In with FaceBook</Text>  
                            </TouchableOpacity>
                        </View>
                        <View style={styles.google}>
                            <TouchableOpacity>
                                <Text style={styles.googleText}>Sign In with Google</Text>
                            </TouchableOpacity>
                        </View>
                    
                </View> */}
                
            </Animatable.View>
            
        </View>
    )
}

export default SignInScreen


const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#9E90A2'
    },
    header: {
        flex: 0.8,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 3.2,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : 0   ,
        paddingLeft: 10,
        color: '#05375a',
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    button: {
        alignItems: 'center',
        marginTop: 50,
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    otherOptions:{
        paddingTop: 15
    },
    facebook:{
        // backgroundColor: 'skyblue',
        // marginTop: 15,
        // padding: 5,
        // flex: 1,
        // borderRadius: 5,
        // marginHorizontal: 5

        // width: "80%",
        backgroundColor: '#4267B2',
        marginTop: 5,
        padding: 20,
        borderRadius: 30,
    },
    google:{
        // backgroundColor: 'gray',
        // marginTop: 15,
        // padding: 5,
        // flex: 1,
        // borderRadius: 5

        // width: "80%",
        backgroundColor: 'gray',
        marginTop: 5,
        padding: 20,
        borderRadius: 30,
    },
    facebookText:{
        color: 'white',
        fontWeight: 'bold',
        alignSelf: 'center'
    },
    googleText:{
        color: 'white',
        fontWeight: 'bold',
        alignSelf: 'center'
    },

  });