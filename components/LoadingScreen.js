import React, { useLayoutEffect } from 'react';
import { Text, View, Image, MaskedViewIOS, Animated, StyleSheet } from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';
import io from "socket.io-client";
import MaskedView from '@react-native-community/masked-view';

export default function LoadingScreen(props) {
 
  useLayoutEffect(() => {
    socket = io("http://192.168.1.10:3001");
    socket.on("chat message", msg => {
      });

      socket.on("message", msg => {
        msg==="this is the 4th message" ? props.navigation.replace("RecipeResult") : console.log("im not navigating from Loading Screen")
      });
    },[]);

  const colorLayer = <View style={[StyleSheet.absoluteFill, {backgroundColor:"#ffa07a"}]}/> 
  const logoLayer = <View style={[StyleSheet.absoluteFill, {backgroundColor:"#ffa20a"}]}/> 




    {/* <Image source={{uri: 'https://gfycat.com/insecurewideeskimodog'}} /> */}

  return (

    <View style={{flex:1}}> 
    {colorLayer}
        <MaskedView
        style={{ flex: 1, flexDirection: 'row', height: '100%' }}
        maskElement={
          <View
            style={{
              // Transparent background because mask is based off alpha channel.
              backgroundColor: 'transparent',
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
             <Animated.Image 
              source={require("./photos/logo2.png")}
              style={[{width:300}]}
              resizeMode="contain"
              /> 
              
              <Animated.View style={{alignSelf:'center'}} >
              <Text>Cooking up the perfect recipes!</Text>
              </Animated.View> 
          </View>}
      >
        {/* Shows behind the mask, you can put anything here, such as an image */}
        <View style={{ flex: 1, height: '100%', backgroundColor:"black" }} />
        {/* <View style={{ flex: 1, height: '100%', backgroundColor: '#F5DD90' }} />
        <View style={{ flex: 1, height: '100%', backgroundColor: '#F76C5E' }} />
        <View style={{ flex: 1, height: '100%', backgroundColor: '#e1e1e1' }} /> */}
      </MaskedView>
      </View>

    
  )

}
{/* <Text
style={{
  fontSize: 60,
  color: 'black',
  fontWeight: 'bold'
}}
>
Basic Mask
</Text> */}

//  <Animated.Image 
// source={require("./photos/logo2.png")}
// style={[{width:300}]}
// resizeMode="contain"
// /> 
{/* <Animated.View style={{alignSelf:'center'}} >
<Text>Cooking up the perfect recipes!</Text>
</Animated.View>  */}