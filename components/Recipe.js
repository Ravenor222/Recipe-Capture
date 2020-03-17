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

const IS_IOS = Platform.OS === 'ios';
const entryBorderRadius = 8;
const {width}  = Dimensions.get('screen');
const imageHeight = Math.round(Dimensions.width * 9 / 16);
const imageWidth = Dimensions.width;

const formatSummary = function(summary) {
  return summary.replace(/<\/?[^>]+(>|$)/g, "")
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
  return(
    <Block safe flex style={{ backgroundColor: theme.COLORS.WHITE }}>
      <Image source={{uri: recipe.image}}
       style={{width: 414, height: 300}} />
      <View style={styles.container}>
      <Header title={recipe.title} time={recipe.readyInMinutes} />
      <ScrollView>
      <Text style={styles.summary}>{formatSummary(recipe.summary)}</Text>
      <Text style={{padding: 20, fontSize: 22, fontWeight: "bold"}}>Ingredients</Text>
      <FlatList
          data={recipe.ingredients}
          renderItem={({ item }) => <IngredientList name={item} />}
        />
      <View>
        <FlatList
          data={recipe.instructions}
          renderItem={({ item }) => <RecipeCard title={item.number} step={item.step} />}
        />
      </View>
      </ScrollView>
    </View>
    </Block>
  )

}