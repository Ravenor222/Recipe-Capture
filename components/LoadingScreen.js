import React, { useLayoutEffect } from 'react';
import { Text, View, Image } from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';
import io from "socket.io-client";


export default function LoadingScreen(props) {
 
  useLayoutEffect(() => {
    socket = io("http://192.168.1.72:3001");
    socket.on("chat message", msg => {
      });

      socket.on("message", msg => {
        msg==="this is the 4th message" ? props.navigation.replace("RecipeResult") : console.log("im not navigating from Loading Screen")
      });
    },[]);

  return (
      <View >
        <Image source={{uri: 'https://gfycat.com/insecurewideeskimodog'}} />
        <Text>Cooking up the perfect recipes!</Text>
      </View>
  )
}