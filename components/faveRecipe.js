import React, {useContext, useState} from 'react';
import Nav from './Nav';
import {  Dimensions, ScrollView, View, TouchableOpacity, ShadowPropTypesIOS, FlatList, StyleSheet, Image, SafeAreaView, Alert } from 'react-native';
import { ProfileContext } from '../contexts/ProfileContext';
import Header from './Header';
import  RecipeCard from './InstructionCard';
import IngredientList from './IngredientList';
import toggleSaved from './helpers/toggleSaved'
import toggleFavourites from './helpers/toggleFavourites'

import {
  Card, Block, NavBar, Icon, theme, Text, Button
} from 'galio-framework';

//test: pls delete

const IS_IOS = Platform.OS === 'ios';
const entryBorderRadius = 8;
const {width}  = Dimensions.get('screen');
const imageHeight = Math.round(Dimensions.width * 9 / 16);
const imageWidth = Dimensions.width;

const formatSummary = function(string) {
  return string.replace(/<\/?[^>]+(>|$)/g, "")
}

const formatIngredients = function(missed, used) {
  const results = [];
  for (let ing of missed) {
    results.push(ing["original"])
  };

  for (let ing of used) {
    results.push(ing["original"])
  }

  return results;
}



const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    content: {
      padding: 40,
    },
    summary: {
      padding: 30,
      textAlign: "justify"
    },
    image: {
      ...StyleSheet.absoluteFillObject,
      resizeMode: 'cover',
      height: imageHeight, 
      width: imageWidth,
      borderRadius: IS_IOS ? entryBorderRadius : 0,
      borderTopLeftRadius: entryBorderRadius,
      borderTopRightRadius: entryBorderRadius
    },
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
  });


export default function Recipe({route, navigation}){
  const {recipe, fromFavourite, fromSaved} = route.params
 
  const ingredients = formatIngredients(recipe.missedIngredients, recipe.usedIngredients)

 
  const [faveState, setFaveState] = useState({
      favourited: true,
      text: "Favourited",
      color: "grey"
    })
      
  const toggleFave = () => {
    const {favourited} = faveState;
      
    if (favourited) {
      setFaveState(prevState => ({
        favourited: false,
        text: "Favourite",
        color: "lightsalmon"
          }))
      } else {
        setFaveState(prevState => ({
          favourited: true, 
          text: "Favourited",
          color: "grey"
        }))
      }
  }
    
      
    const [saveState, setSaveState] = useState({
      saved: false,
      text: "Save for later", 
      color: "lightsalmon"
    });
      
    const toggleSave = () => {
      const {saved} = saveState;
      
      if (saved) {
        setSaveState( prevState => ({
          saved: false,
          text: "Save for later",
          color: "lightsalmon"
        }))
      } else {
        setSaveState( prevState => ({
          saved: true, 
          text: "Saved",
          color: "grey"
        }))
      }
    };


  

  return(
    <Block safe flex style={{ backgroundColor: theme.COLORS.WHITE }}>
     <ScrollView style={{height:300}}>
      <Image source={{uri: recipe.illustration}}
       style={{width: 414, height: 300}} />
      <View style={styles.container}>
      {/* <Header recipe={recipe} toggleFave={toggleFave} faveState={faveState} saveState={saveState} toggleSave={toggleSave} /> */}
      <View style={styles.header}>
      <Text style={styles.title}>{recipe.title}</Text>
      <Text style={styles.time}>Ready in {recipe.time} minutes</Text>
      <Block style={{flex:1, flexDirection:'row', justifyContent: 'center'}}>

      <Button style={{width:'25%', marginHorizontal:8, backgroundColor: saveState.color, shadowColor:'transparent', height:30, marginTop:10}} onPress={()=> {
        toggleSaved(recipe, recipe.id, saveState.saved ? false : true).then(res => Alert.alert("Done!", "Your preferences have been updated", [{text: "Done", onPress: () => toggleSave()}]));
      }}><Text style={{fontWeight:'bold', color:'white'}}>{saveState.text}</Text></Button>
        
      <Button style={{ width:'25%', marginHorizontal:8, backgroundColor: faveState.color, shadowColor:'transparent', height:30, marginTop:10}} onPress={() => {
        toggleFavourites(recipe, recipe.id, faveState.favourited ? false : true).then(res => Alert.alert("Done!", "Your preferences have been updated", [{text: "Done", onPress: () => toggleFave()}]));
      }}><Text style={{fontWeight:'bold', color:'white'}}>{faveState.text}</Text></Button>

      </Block>
    </View>
      <Text style={styles.summary}>{formatSummary(recipe.summary)}</Text>
      <Text style={{padding: 20, fontSize: 25, fontWeight: "bold"}}>Ingredients:</Text>
      <FlatList
          data={ingredients}
          renderItem={({ item }) => <IngredientList name={item} />}
        />
      <View>
      <Text style={{padding: 20, fontSize: 25, fontWeight: "bold"}}>Directions:</Text>
        <FlatList
          data={recipe.instructions[0].steps}
          renderItem={({ item }) => <RecipeCard title={item.number} step={item.step} />}
        />
      </View>
    </View>
      </ScrollView>
    </Block>
  )

}

