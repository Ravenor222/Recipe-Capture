import React, {useLayoutEffect, useCallback} from 'react';
import { Text, View, TouchableOpacity, ActivityIndicator, StyleSheet, Alert } from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';
import io from "socket.io-client";
import { useFocusEffect } from '@react-navigation/native';


export default function LoadingScreen(props) {


  // const resetAction = StackActions.reset({
  //   index: 0,
  //   key: null,
  //   actions: [NavigationActions.navigate({ routeName: 'RecipeResult' })],
  // });

  // props.navigation.dispatch(resetAction) 

    
  useLayoutEffect(() => {
    socket = io("http://192.168.1.70:3001");
    socket.on("chat message", msg => {
      });

      socket.on("message", msg => {
        msg==="this is the 4th message" ? props.navigation.replace("RecipeResult") : console.log("im not navigating from Loading Screen")
      });
    },[]);

  return (
      <View >
        <Text >This is a loading Screen!</Text>
        <Text >Enjoy it while you can!</Text>
      </View>
  )
}