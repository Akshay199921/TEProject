import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import SplashScreen from './SplashScreen';
import SignInScreen from './SignInScreen';
import SignUpScreen from './SignUpScreen';
import AllProducts from "./Products/AllProducts";
import Cart from "./cart/Cart";
import ForgotPassword from "./Users/ForgotPassword";
import RecommendedProducts from "./Products/RecommendedProducts";


const RootStack = createStackNavigator()

const RootStackScreen= ({navigation}) => {
    return(
    <RootStack.Navigator headerMode='none'>
        <RootStack.Screen name="SplashScreen" component={SplashScreen} />
        <RootStack.Screen name="SignInScreen" component={SignInScreen} />
        <RootStack.Screen name="SignUpScreen" component={SignUpScreen} />
        <RootStack.Screen name="AllProducts" component={AllProducts} />
        <RootStack.Screen name="Cart" component={Cart} />
        <RootStack.Screen name="ForgotPassword" component={ForgotPassword} />
        <RootStack.Screen name="RecommendedProducts" component={RecommendedProducts} />
    </RootStack.Navigator>
    )
    
}

export default RootStackScreen
