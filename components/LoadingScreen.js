import React, { useLayoutEffect, useEffect, useState } from 'react';
import { Text, View, Image, MaskedViewIOS, Animated, StyleSheet } from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';
import io from "socket.io-client";
import MaskedView from '@react-native-community/masked-view';

export default function LoadingScreen(props) {
  const [state, setState] = useState({
    loadingProgress: new Animated.Value(0),
    animationDone: false,
  })
  
  // useLayoutEffect(() => {
  //   socket = io("http://192.168.1.10:3001");
  //     socket.on("message", msg => {
  //       msg==="this is the 4th message" ? props.navigation.replace("RecipeResult") : console.log("im not navigating from Loading Screen")
  //     });


  //   },[]);

    useLayoutEffect(()=>{
      Animated.timing(state.loadingProgress, {
        toValue:100,
        duration:100,
        useNativeDriver:true,
        delay:400,
      }).start(()=>{
        setState(state=>({animationDone:true}))
      });
    },[])
 

  const colorLayer = <View style={[StyleSheet.absoluteFill, {backgroundColor:"#ffa07a"}]}/> 
  const logoLayer = <View style={[StyleSheet.absoluteFill, {backgroundColor:"#FFF"}]}/> 
  console.log(state)
  // const imageScale = {
  //   transform: [
  //     {
  //       scale:state.loadingProgress.interpolate({
  //         inputRange: [0, 15, 100],
  //         outputRange: [0.1, 0.06, 16]
  //       })
  //     }
  //   ]
  // }


 const styles = StyleSheet.create({
   centered: {
     flex:1,
     alignItems:'center',
     justifyContent:'center'
   }
 })

  return (

    <View style={{flex:1}}> 
    {colorLayer}
        <MaskedViewIOS
        style={{ flex: 1}}
        maskElement={
          <View style={styles.centered}>
             <Animated.Image 
              source={require("./photos/logo1.png")}
              style={[{width:800}]}
              resizeMode="contain"
              /> 
          </View>}
      >

        {logoLayer}
            <Animated.View style={styles.centered} >
            <Text>Cooking up the perfect recipes!</Text>
            </Animated.View> 
        {/* Shows behind the mask, you can put anything here, such as an image */}
        {/* <View style={{ flex: 1, height: '100%', backgroundColor:"black" }} /> */}
        
      </MaskedViewIOS>
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

{/* <View style={{ flex: 1, height: '100%', backgroundColor: '#F5DD90' }} />
        <View style={{ flex: 1, height: '100%', backgroundColor: '#F76C5E' }} />
        <View style={{ flex: 1, height: '100%', backgroundColor: '#e1e1e1' }} /> */}