import React, { useState } from 'react';
import { Button, Settings, StyleSheet, View, Modal} from 'react-native';
import Icons from "react-native-vector-icons/MaterialCommunityIcons";



import {DrawerContentScrollView , DrawerItem} from  "@react-navigation/drawer";
import { Avatar, Paragraph, TouchableRipple , Title,
  Caption,
  Drawer,
  Text,
  Switch} from 'react-native-paper';






function DrawerContent(props) {
  const [isDarkTheme,setDarkTheme] = useState(false)
  const [isModalVisible,setisModalVisible] = useState(false)
  
    return (
      <View style={{flex: 1}}>
        
          <DrawerContentScrollView {...props}>
             
             <View style={styles.drawerContent}>
 
               <View  style={styles.userInfoSection}>
                   <View style={{flexDirection:'row', marginTop:15 }}>
                       {/* <Avatar.Image source={require("../assets/Akshay.jpg")} size={60} />  */}
                       <View style={{marginLeft: 15}} >
                         <Title style={styles.title}>Akshay Motiyani</Title>
                         <Caption style={styles.caption} >@akiimotiyani007</Caption>
                       </View> 
                   </View>
 
                   
               </View>
 
               <Drawer.Section style={styles.drawerSection} >
                   <DrawerItem 
                   icon={({color,size}) =>(
                     <Icons name="account-details-outline" color={color} size={size} /> 
                   )}
                   label="User Details"  
                   onPress={()=> {props.navigation.navigate('UserDetails')}} 
                   />
 
                  
 
                   <DrawerItem 
                   icon={({color,size}) =>(
                     <Icons name="account-alert-outline" color={color} size={size} /> 
                   )}
                   label="Update Password"  
                   onPress={()=> {props.navigation.navigate('UpdatePassword')}}
                   />

                   <DrawerItem 
                   icon={({color,size}) =>(
                     <Icons name="page-previous-outline" color={color} size={size} /> 
                   )}
                   label="Previous Buys"  
                   onPress={()=> {props.navigation.navigate("PreviousBuys")}}
                   />

                   <DrawerItem 
                   icon={({color,size}) =>(
                     <Icons name="cards-variant" color={color} size={size} /> 
                   )}
                   label="Product Category"  
                   onPress={()=> {props.navigation.navigate("ProductCategory")}}
                   />

                   
                   <DrawerItem 
                   icon={({color,size}) =>(
                     <Icons name="barcode-scan" color={color} size={size} /> 
                   )}
                   label="Scan Product"  
                   />
 
                   {/* <DrawerItem 
                   icon={({color,size}) =>(
                     <Icons name="bookmark-outline" color={color} size={size} /> 
                   )}
                   label="Bookmark"  
                   onPress={()=> {props.navigation.navigate('Bookmark')} }
                   />
                   
                   <DrawerItem 
                   icon={({color,size}) =>(
                     <Icons name="account-settings-outline" color={color} size={size} /> 
                   )}
                   label="Settings"  
                   onPress={()=> {props.navigation.navigate('Settings')} }
                   />
                   
                   <DrawerItem 
                   icon={({color,size}) =>(
                     <Icons name="account-check-outline" color={color} size={size} /> 
                   )}
                   label="Support"  
                   onPress={()=> {props.navigation.navigate('Support')} }
                   /> */}
                    
               </Drawer.Section>
 
               {/* <Drawer.Section title="Preferences">
                 <TouchableRipple onPress={() => toggleTheme()}>
                   <View style={styles.preference}>
                     <Text>Dark Theme</Text>
                     <View pointerEvents='none'>
                         <Switch value={isDarkTheme} />
                     </View>
                     
                   </View>
                 </TouchableRipple>
               </Drawer.Section> */}
 
             </View>
          </DrawerContentScrollView>
          <Drawer.Section style={styles.bottomDrawerSection}>
             
             <DrawerItem  
             icon={({color,size}) =>(
               <Icons name="exit-to-app" color={color} size={size} /> 
             )}
             label="Sign Out"  
             onPress={()=> {} } />
 
          </Drawer.Section>
      </View>
     )
   }


const styles= StyleSheet.create({
    drawerContent: {
        flex: 1,
      },
      userInfoSection: {
        paddingLeft: 20,
      },
      title: {
        fontSize: 16,
        marginTop: 3,
        fontWeight: 'bold',
      },
      caption: {
        fontSize: 14,
        lineHeight: 14,
      },
      row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
      },
      section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
      },
      paragraph: {
        fontWeight: 'bold',
        marginRight: 3,
      },
      drawerSection: {
        marginTop: 50,
      },
      bottomDrawerSection: {
          marginBottom: 15,
          borderTopColor: '#f4f4f4',
          borderTopWidth: 1
      },
      preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
      },
})



export default DrawerContent;
