import React from 'react';
import { Button, StyleSheet, Text, TextInput, View,ImageBackground } from 'react-native';

function UpdatePassword({navigation}) {
    return (
        <View style={styles.container} >

                <View style={styles.heading} >
                    <Text style={styles.headingText} >Update Password</Text>
                </View>
                <View  style={styles.shadowbox}>
                    <View style={styles.textInput}>
                        <Text style={styles.textInputName}>Old Password</Text>
                        
                    </View>
                    <TextInput   style={styles.form} />
                    <View style={styles.textInput}>
                        <Text style={styles.textInputName}>New Password</Text>
                        
                    </View>
                    <TextInput   style={styles.form} keyboardType="numeric" />
                    <View style={styles.textInput}>
                        <Text style={styles.textInputName}>Confirm New Password</Text>
                        
                    </View>
                    <TextInput   style={styles.form} multiline />



                    <Button title="Update" color="green" />
                </View>
                <Button title="Go back to products" color="gray" onPress={()=> navigation.navigate("AllProducts")} />
                



            </View>
    )
}

export default UpdatePassword



const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFF',
    //   alignItems: 'center',
    //   justifyContent: 'center',
        
    },
    heading:{
        backgroundColor: '#9E90A2',
        width: '100%',
        alignItems: 'center',
        
    },
    headingText:{
        fontWeight: 'bold',
        fontSize:25,
        color: '#fff',
        borderBottomColor: '#333',
        borderBottomWidth: 2
        
        
    },
    textInput:{
        marginTop: 15,
        backgroundColor: '#4267B2',
        borderRadius: 5,
        // padding: 10
        
    },
    textInputName:{
            fontWeight: 'bold',
            fontSize: 20,
            padding: 5,
            color: 'white'
    },
    form:{
        marginVertical: 5,
        backgroundColor: '#ded9d9',
        padding: 7,
        width: "75%",
        borderRadius: 20,
        marginBottom: 10,

    },
    shadowbox:{
        // flex: 1,
        marginHorizontal: 10,
        marginVertical: 15,
        paddingVertical: 15,
        alignItems: 'center',
        borderRadius: 5,
        // borderWidth: 1,
        borderColor: 'gray',
        elevation: 5,
        backgroundColor: '#FFF',
        shadowOffset: {width: 1, height: 1},
        shadowColor: '#333',
        shadowOpacity: 0.3,
        shadowRadius: 2 ,
        
    }
  });