import React, { useState, useEffect, useContext } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';
import { FontAwesome } from '@expo/vector-icons';
import axios from 'axios';
import { ProfileContext, ProfileContextProvider } from './ProfileContext';



export default function CameraApp (props){
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [state, setState] = useContext(ProfileContext);

    // => This is the current state that is being sent upon transition from home page to camera
    console.log(props.route.params)


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
            style = {{
              alignSelf: 'center',
              backgroundColor: 'transparent',
            }}

            onPress = {async () => {
              
              const options = {
                base64: true
              }
              if(this.camera) {
                let photo = await this.camera.takePictureAsync(options);
                console.log(state)

                // axios.post('http://192.168.88.103:3001/', {data: {photo: photo.base64, state:}, headers: {'Content-type': 'application/x-www-form-urlencoded'}})
                // .then(res => console.log("success"))
                // .catch(err => console.log(err))
              }
            }}>
            <FontAwesome
              name="camera"
              style={{ color: "#fff", fontSize: 40}}
            />
          </TouchableOpacity>
        </View>
      </Camera>
    </View>

  );
}

// 1: post params w/ the picture w/ axios
// 2: receive it on the server end and start thinking about the query string
// 3: make a switch component