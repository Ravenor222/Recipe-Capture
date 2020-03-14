import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';
import { Button } from 'galio-framework';
import CameraApp from './Camera';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function Home ({navigation}){

  const goToCamera = () =>{
    Actions.camera()
  }

  let styles = StyleSheet.create({
    backgroundImage: {
      width:'100%',
      height:'100%',
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'space-around'
    },
    button: {
      alignSelf: "center"
    },
    dropdown:{
      backgroundColor: "white",
      width: '80%',
      alignSelf: "center",
      paddingLeft: 5,
      paddingRight: 5
    }
  });

  let cuisine = [{
    value: 'Any',
  }, {
    value: 'Italian',
  }, {
    value: 'Mexican',
  }, {
    value: 'Chinese',
  }, {
    value: 'American',
  }, {
    value: 'Japanese',
  }, {
    value: 'Mediterranean',
  }, {
    value: 'Indian',
  }, {
    value: 'Thai',
  }, {
    value: 'Korean',
  }];

  let time = [{
    value: 'Any'
  }, {
    value: '30 minutes or less'
  } , {
    value: '1 hour or less'
  }]

  return (
      <ImageBackground source={require("./photos/food1.jpg")} style={styles.backgroundImage}>
        <Dropdown label='Select Cuisine' data={cuisine} containerStyle={styles.dropdown}/>
        <Dropdown label='Ready In' data={time} containerStyle={styles.dropdown}/>
        <Button shadowless size="small" iconSize={50} color="error" style={styles.button} onPress = {() => navigation.navigate('Camera')}>Start Now</Button>
      </ImageBackground>
  )


}