import 'react-native-gesture-handler';
// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';


import RootStackScreen from './Screens/RootStackScreen';


import DrawerContent from "./Screens/DrawerContent";
import UserDetails from './Screens/Users/UserDetails';
import UpdatePassword from "./Screens/Users/UpdatePassword";
import ForgotPassword from "./Screens/Users/ForgotPassword";
import PreviousBuys from "./Screens/Products/PreviousBuys";
import PreviousBuysDetails from "./Screens/Products/PreviousBuysDetails";


const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      {/* <RootStackScreen /> */}
      <Drawer.Navigator initialRouteName="Home" drawerContent={props => <DrawerContent {...props}/>} >
        <Drawer.Screen name="Home" component={RootStackScreen} />
        <Drawer.Screen name="UserDetails" component={UserDetails} />
        <Drawer.Screen name="UpdatePassword" component={UpdatePassword} />
        <Drawer.Screen name="ForgotPassword" component={ForgotPassword} />
        <Drawer.Screen name="PreviousBuys" component={PreviousBuys} />
        <Drawer.Screen name="PreviousBuysDetails" component={PreviousBuysDetails} />

      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

