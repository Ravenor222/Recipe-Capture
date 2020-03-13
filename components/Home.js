import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';
import { FontAwesome } from '@expo/vector-icons';

function identifyImage(imageData) {
  // Initialise the Clarifai api
  const Clarifai = require('clarifai');
  const app = new Clarifai.App({
      apiKey: '73cb02089cfe46e093f094aa426a0692'
  });
  // Identify the image
  // this.displayAnswer(response.outputs[0].data.concepts[0].name
  app.models.predict('bd367be194cf45149e75f01d59f77ba7', {base64: imageData})
  .then((response) => console.log(response.outputs[0].data.concepts))
  .catch((err) => console.log(err))
}

export default function Home (props){
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

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
                identifyImage(photo.base64);
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