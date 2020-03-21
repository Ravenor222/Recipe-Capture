import React, { useState, useEffect,useCallback, useLayoutEffect } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { Text, View, TouchableOpacity, ActivityIndicator, StyleSheet } from 'react-native';
import { Camera } from 'expo-camera';
import { FontAwesome } from '@expo/vector-icons';
import axios from 'axios';
import { ProfileContext, ProfileContextProvider } from '../contexts/ProfileContext';
import io from "socket.io-client";



export default function CameraApp (props){
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [spinner, setSpinner] = useState(false);
  const [display, setDisplay] = useState('flex');
  const [chatMessage, setChatMessage] = useState("");
  const [chatMessages, setChatMessages] = useState([]);


  useLayoutEffect(() => {
    socket = io("http://192.168.1.10:3001");
    socket.on("chat message", msg => {
      setChatMessages({ chatMessages: [...chatMessages, msg]  })
    });

    socket.on("message", msg => {
      console.log(msg);
      if(msg === "this is the 2nd message") {
        console.log("its the right message")
        console.log("Here you would command the screen navigation")
      }

    });
  },[]);
  // socket.emit('chat message', chatMessage);
  // console.log(chatMessage, "function");
  // setChatMessage({chatMessage: 'What the..'});
      const submitChatMessage = () =>{
        axios.get('http://192.168.1.10:3001/')
        .catch(err=>console.log(err,"err"))
      }

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
            // onPress={submitChatMessage}
            onPress = {
              async () => {
              setSpinner(true);
              setDisplay('none')
              const options = {
                base64: true
              }
              //setTimeout(()=> {props.navigation.navigate("RecipeResult")}, 10000)
              if(this.camera) {
                let photo = await this.camera.takePictureAsync(options);
                //'http://192.168.88.103:3001/'

                axios.post('http://192.168.1.10:3001/', {data: {photo: photo.base64, state:props.route.params.state}, headers: {'Content-type': 'application/x-www-form-urlencoded'}})
                
                .then(res => console.log('success'))
                .catch(err => console.log("error"))
              }
              
            }}
            >
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

