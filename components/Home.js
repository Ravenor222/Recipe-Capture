import React, { useState, useEffect, useContext } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';
import { Button } from 'galio-framework';
import CameraApp from './Camera';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ProfileContext, ProfileContextProvider } from './ProfileContext';
import symbolicateStackTrace from 'react-native/Libraries/Core/Devtools/symbolicateStackTrace';
import DropDownComponent from './Dropdown';

export default function Home ({navigation}){

  const [state, setState] = useContext(ProfileContext)

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
        <ProfileContextProvider> 
          <DropDownComponent list={time} label="Ready in..." preference='time'/>
        </ProfileContextProvider>
        <ProfileContextProvider> 
          <DropDownComponent list={cuisine} label="Select Cuisine" preference='cuisine' />
        </ProfileContextProvider>
        <Button shadowless size="small" iconSize={50} color="error" style={styles.button} onPress = {() => navigation.navigate('Camera')}>Start Now</Button>
      </ImageBackground>
  )


}