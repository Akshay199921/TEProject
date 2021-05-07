import React from 'react';
import { Button, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import {Formik} from 'formik'
import * as yup from 'yup'
import {LinearGradient} from 'expo-linear-gradient';

const SignUpFormSchema = yup.object({
    email: yup.string()
                .required("Email is required")
                .email("Enter valid email"),
    PhoneNumber: yup
    .string()
    .matches(/()(\d){10}\b/, 'Enter a valid phone number')
    .required('Phone number is required'),


    Password: yup
    .string()
    .required("Enter A valid Password")
})

export default function SignInForm() {
    return (
        <View style={{...StyleSheet.absoluteFill},styles.formContainer}>
            <ScrollView>
                <Text style={styles.text}>SignIn</Text>
                <Formik
                initialValues={{FirstName: "", LastName: "",email: "",PhoneNumber: "",Address:""}}
                validationSchema={SignUpFormSchema}
                onSubmit={(values)=>{
                    console.log(values)
                }}
                >
                {(props) =>(
                    <View >

                        <TextInput 
                        placeholder="Email"
                        onChangeText={props.handleChange('email')}
                        value={props.values.email}
                        style={styles.textInput}
                        onBlur={props.handleBlur('email')}
                        />
                        <Text style={styles.errorText}> {props.touched.email && props.errors.email } </Text>


                        <TextInput 
                        placeholder="PhoneNumber"
                        onChangeText={props.handleChange('PhoneNumber')}
                        value={props.values.PhoneNumber}
                        style={styles.textInput}
                        onBlur={props.handleBlur('PhoneNumber')}
                        />
                        <Text style={styles.errorText}> {props.touched.PhoneNumber && props.errors.PhoneNumber } </Text>

                        <TextInput placeholder="Password"
                        onChangeText={props.handleChange('Password')}
                        value={props.values.Password}
                        style={styles.textInput}
                        onBlur={props.handleBlur('Password')}
                         />
                        <Text style={styles.errorText}> {props.touched.Password && props.errors.Password } </Text>


                        <Button title="SUBMIT" color="green" onPress={props.handleSubmit} />


                    </View>
                )}
                </Formik>
                <View style={styles.otherOptions}>
                    
                        <View style={styles.facebook}>
                            <TouchableOpacity>
                                <Text style={styles.facebookText}>Sign up with FaceBook</Text>  
                            </TouchableOpacity>
                        </View>
                        <View style={styles.google}>
                            <TouchableOpacity>
                                <Text style={styles.googleText}>Sign up with Google</Text>
                            </TouchableOpacity>
                        </View>
                    
                </View>
            </ScrollView>
            
        </View>
        
    )
}


const styles = StyleSheet.create({
    formContainer:{
        // backgroundColor: '#9E90A2',
        // width: 300,
        padding: 20,
        borderRadius: 5,
        // marginBottom: 80,
        // position: 'absolute'
    },
    textInput:{
        marginVertical: 5,
        borderWidth: 1,
        borderColor: 'black',
        padding: 10,
        // width: "80%"
        borderRadius: 8
    },
    errorText:{
        color: 'red',
        textAlign: 'center'
    },
    text:{
        color: "#9E90A2",
        alignSelf: 'center',
        marginBottom: 5,
        fontWeight: 'bold',
        fontSize: 24
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
    SubmitButton:{
        width: 150,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        flexDirection: 'row'
    }
})