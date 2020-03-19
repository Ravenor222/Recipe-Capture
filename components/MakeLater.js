import React, {useEffect, useState, useCallback} from 'react';
import Nav from './Nav';
import {
  ScrollView, StyleSheet, Dimensions, Platform, TouchableOpacity, AsyncStorage
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
// Galio components
import {
  Card, Block, NavBar, Icon, theme, Button
} from 'galio-framework';
const { width } = Dimensions.get('screen');
import { useFocusEffect } from '@react-navigation/native';


 
const getSavedAsync = async () => {
  const item = await AsyncStorage.getItem('saved')
  const obj = JSON.parse(item);
  console.log(obj);
  return obj;
}

const pushSavedRecipes = (state) => {
  const keys = Object.keys(state)
  let results = [];

  for ( let item of keys) {
    results.push(state[item]);
  }
  return results;
} 

export default function MakeLater(props) {
  const [state, setState] = useState("")
  const recipes = pushSavedRecipes(state)


  // useEffect(() => {
  //   getSavedAsync().then((savedState) => {setState(state=>({...savedState }))}) 

  // });/// -> Need to depend on a value to update, but what?



  useFocusEffect(
    useCallback(() => {
     getSavedAsync().then((savedState) => {setState(state=>({...savedState }))}) 

    },[])
  )

    return (
      <Block safe flex style={{ backgroundColor: theme.COLORS.WHITE }}>
        {/* <Nav title="Saved Recipes" navigation={navigation}  /> */}
        <NavBar style = {styles.nav}
          title="Saved Recipes"
          left={(
            <TouchableOpacity onPress={() => props.navigation.openDrawer()}>
              <Icon 
                name="menu"
                family="feather"
                size={25}
                color={theme.COLORS.WHITE}
              />
            </TouchableOpacity>
          )}
          titleStyle={{ color:'white', fontSize:25 }}/>
          <Button onPress={()=>{console.log(recipes)}}/>
        <ScrollView contentContainerStyle={styles.cards}>
          <Block flex space="between">
            {recipes && recipes.map((recipe, id) => (
                <TouchableOpacity style={styles.card} onPress={() => {props.navigation.navigate('Recipe', {recipe});}} >
                <Card
                  key={recipe.id}
                  avatar='https://storage.needpix.com/rsynced_images/ribbon-1202758_1280.png'
                  title={recipe.title.toUpperCase()}
                  borderless
                  shadowColor={theme.COLORS.BLACK}
                  style={styles.cardBackground}
                  caption={`Ready in ${recipe.time} minutes`}
                  image={recipe.illustration}
                  imageBlockStyle={[styles.noRadius]}
                  footerStyle={{paddingLeft: 5, marginRight:70}}
                >
                </Card>
              </TouchableOpacity>
            ))}
          </Block>
        </ScrollView>
      </Block>
    );
  }

const styles = StyleSheet.create({
  cards: {
    width,
    backgroundColor: theme.COLORS.WHITE,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  cardBackground:{
    backgroundColor: theme.COLORS.WHITE,
  },
  card: {
    width: width - theme.SIZES.BASE * 2,
    marginVertical: theme.SIZES.BASE * 0.875,
    elevation: theme.SIZES.BASE / 2,
  },
  full: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
  },
  noRadius: {
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  rounded: {
    borderRadius: theme.SIZES.BASE * 0.1875,
  },
  gradient: {
    bottom: 0,
    left: 0,
    right: 0,
    height: 90,
    position: 'absolute',
    overflow: 'hidden',
    borderBottomRightRadius: theme.SIZES.BASE * 0.5,
    borderBottomLeftRadius: theme.SIZES.BASE * 0.5,
  },
  nav: {
    backgroundColor: "lightsalmon"
  }
});