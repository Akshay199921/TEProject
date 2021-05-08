import React from 'react'
import { Button, StyleSheet, Text, View,ActivityIndicator } from 'react-native';
function LoadingScreen() {
    return (
        <View>
            <ActivityIndicator size="small" color="blue" />
        </View>
    )
}

export default LoadingScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  
  