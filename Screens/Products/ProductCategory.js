import React from 'react'
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icons from "react-native-vector-icons/Ionicons";


function ProductCategory({navigation}) {
    return (
        <View style={styles.container}>
            <View style={styles.Heading}>
                <View style={{position: 'absolute', left: 1,opacity: 0.4,}} >
                    <Icons.Button name="arrow-back" size={25} backgroundColor="#9E90A2" color="crimson"
                        onPress={() => navigation.navigate("AllProducts") }></Icons.Button>

                </View>
                <Icon name='cards-variant' color='crimson'  size={20} ></Icon>
                <Text style={styles.HeadingText}>Category</Text>
            </View>

            <View style={styles.body}>
                <TouchableOpacity>
                    <View style={styles.content}>
                        <Text style={styles.text}> 1. Stationary</Text>
                    </View>
                </TouchableOpacity>


                <TouchableOpacity>
                    <View style={styles.content}>
                        <Text style={styles.text}> 2. Grocery</Text>
                    </View>
                </TouchableOpacity>
                    

                <TouchableOpacity>
                    <View style={styles.content}>
                        <Text style={styles.text}> 3. Vegetables and Fruit</Text>
                    </View>
                </TouchableOpacity>
                

                <TouchableOpacity>
                    <View style={styles.content}>
                        <Text style={styles.text}> 4. HouseHold Items</Text>
                    </View>
                </TouchableOpacity>
                

                <TouchableOpacity>
                    <View style={styles.content}>
                        <Text style={styles.text}> 5. House Hold Items</Text>
                    </View>
                </TouchableOpacity>
                

                <TouchableOpacity>
                    <View style={styles.content}>
                        <Text style={styles.text}> 6. Snacks</Text>
                    </View>
                </TouchableOpacity>


                <TouchableOpacity>
                    <View style={styles.content}>
                        <Text style={styles.text}> 7. Berverages</Text>
                    </View>
                </TouchableOpacity>


                <TouchableOpacity>
                    <View style={styles.content}>
                        <Text style={styles.text}> 8. BreakFast and Dairy</Text>
                    </View>
                </TouchableOpacity>                    
            </View>

        </View>
    )
}

export default ProductCategory

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      
    //   alignItems: 'center',
    },
    Heading:{
        backgroundColor: '#9E90A2',
        padding: 5,
        alignItems:'center',
        opacity: 0.7,
        flexDirection:'row',
        justifyContent: 'center'
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
        marginVertical: 6,
        borderRadius: 6,
        elevation: 5,
        backgroundColor: '#f5f5f5',
        shadowOffset: {width: 1, height: 1},
        shadowColor: '#333',
        shadowOpacity: 0.3,
        shadowRadius: 2,
        padding: 10,
        height: "100%"
    },
    content:{
        marginHorizontal: 4,
        marginVertical: 7,
        borderRadius: 6,
        elevation: 5,
        backgroundColor: '#f5f5f5',
        shadowOffset: {width: 1, height: 1},
        shadowColor: '#333',
        shadowOpacity: 0.3,
        shadowRadius: 2,
        padding: 10,
    },
    text:{
        fontWeight: 'bold',
        color: '#05874d',
        textTransform: "uppercase",
        // color: '#333',
        marginLeft: 5,
        fontSize: 16
    }
  });
  