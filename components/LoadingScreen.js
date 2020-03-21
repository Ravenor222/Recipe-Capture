import React, {useLayoutEffect} from 'react';
import { Text, View, TouchableOpacity, ActivityIndicator, StyleSheet, Alert } from 'react-native';
import io from "socket.io-client";





export default function LoadingScreen(props) {
    
    
    useLayoutEffect(() => {
        socket = io("http://192.168.1.10:3001");
        socket.on("chat message", msg => {
        });

        socket.on("message", msg => {
          msg==="this is the 4th message" ?  props.navigation.navigate("RecipeResult") : console.log("im not navigating from Loading Screen")
        });
      },[]);

    return (
        <View >
            <Text >This is a loading Screen!</Text>
            <Text >Enjoy it while you can!</Text>
        </View>
    )
}