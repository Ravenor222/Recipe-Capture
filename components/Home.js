import React from 'react';

import { StyleSheet, ImageBackground } from 'react-native';
import { ProfileContextProvider } from './ProfileContext';
import DropdownCuisineComponent from './DropdownCuisine';
import DropdownTimeComponent from './DropDownTime'
import ButtonComponent from './ButtonComponent';


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

    <ImageBackground source={require("./photos/food1.jpg")} style={styles.backgroundImage}>

      <ProfileContextProvider> 

        <DropdownTimeComponent 
         list={time} 
         style={styles.dropdown}
         label="Ready in..." />
        <DropdownCuisineComponent 
         list={cuisine} 
         style={styles.dropdown}
         label="Select Cuisine" />
        <ButtonComponent 
         style={styles.button} 
         navigation={navigation}/>
       
      </ProfileContextProvider>
    </ImageBackground>
  

  )


}
