import React from 'react';
import { Text, View, MaskedViewIOS, Animated, StyleSheet } from 'react-native';
import io from "socket.io-client";
import MaskedView from '@react-native-community/masked-view';

export default class LoadingScreen extends React.Component{
  state={
    loadingProgress: new Animated.Value(0),
    animationDone: false,
  }

  componentDidMount() {
    let socket = io("http://192.168.1.72:3001");
    socket.on("message", msg => {
      Animated.timing(this.state.loadingProgress, {
        toValue:120,
        duration:1000,
        useNativeDriver:true,
        delay:100,
      }).start(()=>{
        this.setState({ animationDone: true });
        this.props.navigation.replace("RecipeResult");

      });
      
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
                  source={require("./photos/camera.png")}
                  style={[{width:1100}, imageScale]}
                  resizeMode="contain"
                  /> 
              </View>}
          >
    
            {logoLayer}
                <Animated.View style={[opacity, styles.centered]} >
                <Text style={{fontSize:24}}>Cooking up the perfect recipes!</Text>
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
