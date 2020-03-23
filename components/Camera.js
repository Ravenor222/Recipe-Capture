import React, { useState, useEffect, useLayoutEffect } from 'react';
import { Text, View, TouchableOpacity, ActivityIndicator, StyleSheet, AsyncStorage } from 'react-native';
import { Camera } from 'expo-camera';
import { FontAwesome } from '@expo/vector-icons';
import axios from 'axios';
import io from "socket.io-client";
import { StackActions, NavigationActions } from 'react-navigation';

const getAsync = async () => {
  const profileStorage = await AsyncStorage.getItem('state');
  const JSONstorage = JSON.parse(profileStorage);
  return JSONstorage
}

export default function CameraApp (props){
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [spinner, setSpinner] = useState(false);
  const [display, setDisplay] = useState('flex');
  const [chatMessages, setChatMessages] = useState([]);

  const profileSettings = getAsync()
  .then(x => x)  
  .catch(x=>console.error(x));

  useLayoutEffect(() => {
    socket = io("http://192.168.1.72:3001");
    socket.on("chat message", msg => {
      setChatMessages({ chatMessages: [...chatMessages, msg]  })
    });
    //, { screen: 'RecipeResults' }
    socket.on("message", msg => {
      (msg);
      msg==="this is the 3rd message" ?  props.navigation.replace("Loading") : console.log("Im not navigating camera");

    });
  },[]);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
    }, []);
    if (hasPermission === null) {
      return <View />;
    }
    if (hasPermission === false) {
      return <Text>No access to camera</Text>;
    }

  return (
    <View style={{ flex: 1 }}>
      <Camera style={{ flex: 1 }} type={type} ref={ref=>{this.camera = ref}}>
        <View style={{flex:1, flexDirection:"column",justifyContent:"flex-end",margin:20}}>
          <TouchableOpacity
            style = {{alignSelf: 'center', backgroundColor: 'transparent'}}
            onPress = {
              async () => {
              setSpinner(true);
              setDisplay('none')
              const options = {
                base64: true
              }
              if(this.camera) {
                let photo = await this.camera.takePictureAsync(options);
                //'http://192.168.88.103:3001/'
                axios.post('http://192.168.1.72:3001/', {data: {photo: photo.base64, state:props.route.params.state, profileState: profileSettings}, headers: {'Content-type': 'application/x-www-form-urlencoded'}})
                .then(res => console.log('success'))
                .catch(err => console.log("error"))
              } 
            }}>
            <ActivityIndicator size="large" color="#FFFFFF" animating={spinner} style={styles.spinner}/>
            <FontAwesome name="camera" style={{ color: "#fff", fontSize: 40, display: display}}/>
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
}

let styles = StyleSheet.create({
  spinner:{
    zIndex: 1
  }
})

