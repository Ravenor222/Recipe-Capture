import React, {useContext, useState} from 'react';
import Nav from './Nav';
import { View, TouchableOpacity, ShadowPropTypesIOS, StyleSheet, Alert} from 'react-native';
import { ProfileContext } from '../contexts/ProfileContext';
import toggleSaved from './helpers/toggleSaved'
import toggleFavourites from './helpers/toggleFavourites'

import {
  Card, Block, NavBar, Icon, theme, Text, Button
} from 'galio-framework';
import { setLightEstimationEnabled } from 'expo/build/AR';


const styles = StyleSheet.create({
  header: {
    height: 100,
    paddingTop: 28,
    paddingBottom: 28,
    backgroundColor: 'white'
  },
  title: {
    textAlign: "center", 
    color: "black",
    fontSize: 18,
    fontWeight: "bold"
  },
  time: {
    textAlign: "center",
    marginTop: 6,
    color: 'gray',
    fontSize: 13,
    fontStyle: 'italic'
}
})




export default function Header(props) {

  return (
    <View style={styles.header}>
      <Text style={styles.title}>{props.recipe.title}</Text>
      <Text style={styles.time}>Ready in {props.recipe.time} minutes</Text>
      <Block style={{flex:1, flexDirection:'row', justifyContent: 'center'}}>

      <Button style={{width:'25%', marginHorizontal:8, backgroundColor: props.saveState.saved ? 'grey' : 'lightsalmon', shadowColor:'transparent', height:30, marginTop:10}} onPress={()=> {
        toggleSaved(props.recipe, props.recipe.id, props.saveState.saved ? false : true).then(res => Alert.alert("Saved!", "This recipe has been saved for later", [{text: "Done", onPress: () => props.toggleSave()}]));
      }}><Text style={{fontWeight:'bold', color:'white'}}>{props.saveText}</Text></Button>
        
      <Button style={{ width:'25%', marginHorizontal:8, backgroundColor: props.faveState.favourited ? 'grey' : 'lightsalmon', shadowColor:'transparent', height:30, marginTop:10}} onPress={() => {
        toggleFavourites(props.recipe, props.recipe.id, props.faveState.favourited ? false : true).then(res => Alert.alert("Saved!", "This recipe has been added to your Favourites", [{text: "Done", onPress: () => props.toggleFave()}]));
      }}><Text style={{fontWeight:'bold', color:'white'}}>{props.faveText}</Text></Button>

      </Block>
    </View>
  )
}