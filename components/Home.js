import React, { useState, useEffect, useContext } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';
import { Button } from 'galio-framework';
import CameraApp from './Camera';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ProfileContext, ProfileContextProvider } from './ProfileContext';
import symbolicateStackTrace from 'react-native/Libraries/Core/Devtools/symbolicateStackTrace';
import DropDownCuisineComponent from './DropdownCuisine';
import DropDownTimeComponent from './DropDownTime'
import ButtonComponent from './ButtonComponent';
import Axios from 'axios';

export default function Home ({navigation}){
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
    // NOTE: When I removed all the contextProviders, the background image started to load slower
    // -> Both having the provider inside / outside the ImageBackground tag
      <ImageBackground source={require("./photos/food1.jpg")} style={styles.backgroundImage}>
        <ProfileContextProvider> 

        <DropDownTimeComponent 
         list={time} 
         style={styles.dropdown}
         label="Ready in..." />
        <DropDownCuisineComponent 
         list={cuisine} 
         style={styles.dropdown}
         label="Select Cuisine" />
        <ButtonComponent 
         style={styles.button} 
         navigation={navigation}/>
        <Button
         shadowless size="small" 
         iconSize={50} color="error" 
         style={styles.button} 
         onPress = {() => {navigation.navigate('Camera');}}>Start Now</Button>
       
       </ProfileContextProvider>
      </ImageBackground>

  )


}
