import React, {useContext} from 'react';
import Nav from './Nav';
import { View, TouchableOpacity, ShadowPropTypesIOS, StyleSheet} from 'react-native';
import { ProfileContext } from '../contexts/ProfileContext';
import addToSaved from '../components/helpers/AddToMakeLater'
import addToFavourites from '../components/helpers/AddToFavourites'

import {
  Card, Block, NavBar, Icon, theme, Text, Button
} from 'galio-framework';


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
      <Text style={styles.time}>Ready in {props.recipe.readyInMinutes} minutes</Text>
      <Block style={{flex:1, flexDirection:'row', justifyContent: 'center'}}>

      <Button style={{width:'25%', marginHorizontal:8, backgroundColor:'lightsalmon', shadowColor:'transparent', height:30, marginTop:10}} onPress={()=> {
        addToSaved(props.recipe, props.recipe.id);
      }}><Text style={{fontWeight:'bold', color:'white'}}>Saves</Text></Button>
        
      <Button style={{ width:'25%', marginHorizontal:8, backgroundColor:'lightsalmon', shadowColor:'transparent', height:30, marginTop:10}} onPress={() => {
        addToFavourites(props.recipe, props.recipe.id);
      }}><Text style={{fontWeight:'bold', color:'white'}}>Faves</Text></Button>

      </Block>
    </View>
  )
}