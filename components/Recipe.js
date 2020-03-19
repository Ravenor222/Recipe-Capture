import React, {useContext, useState} from 'react';
import Nav from './Nav';
import {  Dimensions, ScrollView, View, TouchableOpacity, ShadowPropTypesIOS, FlatList, StyleSheet, Image, SafeAreaView } from 'react-native';
import { ProfileContext } from '../contexts/ProfileContext';
import Header from './Header';
import  RecipeCard from './InstructionCard';
import IngredientList from './IngredientList';

import {
  Card, Block, NavBar, Icon, theme, Text
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
  }
});


export default function Recipe({route, navigation}){
  const { recipe } = route.params
  const ingredients = formatIngredients(recipe.missedIngredients, recipe.usedIngredients)
  const instructions = recipe.instructions

  return(
    <Block safe flex style={{ backgroundColor: theme.COLORS.WHITE }}>
     <ScrollView>
      <Image source={{uri: recipe.illustration}}
       style={{width: 414, height: 300}} />
      <View style={styles.container}>
      <Header recipe={recipe} />
      <Text style={styles.summary}>{formatSummary(recipe.summary)}</Text>
      <Text style={{padding: 20, fontSize: 25, fontWeight: "bold"}}>Ingredients:</Text>
      <FlatList
          data={ingredients}
          renderItem={({ item }) => <IngredientList name={item} />}
        />
      <View>
      <Text style={{padding: 20, fontSize: 25, fontWeight: "bold"}}>Directions:</Text>
        <FlatList
          data={instructions}
          renderItem={({ item }) => <RecipeCard title={item.steps.number} step={item.steps.step} />}
        />
      </View>
    </View>
      </ScrollView>
    </Block>
  )

}