import React, { useLayoutEffect, useEffect, useState } from 'react';
import { Text, View, Image, MaskedViewIOS, Animated, StyleSheet } from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';
import io from "socket.io-client";
import MaskedView from '@react-native-community/masked-view';

export default class LoadingScreen extends React.Component{
  state={
    loadingProgress: new Animated.Value(0),
    animationDone: false,
  }

  componentDidMount() {
    Animated.timing(this.state.loadingProgress, {
      toValue:110,
      duration:1000,
      useNativeDriver:true,
      delay:1000,
    }).start(()=>{
      this.setState({ animationDone: true });
      // console.log(this.state, "this.state");
    });
  }
    

    render() {
      const colorLayer = <View style={[StyleSheet.absoluteFill, {backgroundColor:"#ffa07a"}]}/> 
      const logoLayer = <View style={[StyleSheet.absoluteFill, {backgroundColor:"#FFF"}]}/> 
      const imageScale = {
        transform: [
          {
            scale:this.state.loadingProgress.interpolate({
              inputRange: [0, 15, 100],
              outputRange: [0.1, 0.06, 16]
            })
          }
        ]
      }
      const opacity = {
        opacity: this.state.loadingProgress.interpolate({
          inputRange: [0, 25, 50],
          outputRange: [0, 0, 1],
          extrapolate: 'clamp'
        })
      }
      return (
        <View style={{flex:1}}> 
        {colorLayer}
            <MaskedViewIOS
            style={{ flex: 1}}
            maskElement={
              <View style={styles.centered}>
                 <Animated.Image 
                  source={require("./photos/logo1.png")}
                  style={[{width:1000}, imageScale]}
                  resizeMode="contain"
                  /> 
              </View>}
          >
    
            {logoLayer}
                <Animated.View style={[opacity, styles.centered]} >
                <Text>Cooking up the perfect recipes!</Text>
                </Animated.View> 
            {/* Shows behind the mask, you can put anything here, such as an image */}
            {/* <View style={{ flex: 1, height: '100%', backgroundColor:"black" }} /> */}
            
          </MaskedViewIOS>
          </View>
    
        
      )
    
    }


    }
     const styles = StyleSheet.create({
       centered: {
         flex:1,
         alignItems:'center',
         justifyContent:'center'
       }
     })
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