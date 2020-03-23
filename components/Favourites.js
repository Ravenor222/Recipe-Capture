
import React, {useEffect, useState, useCallback} from 'react';
import { ScrollView, StyleSheet, Dimensions, TouchableOpacity, AsyncStorage, ImageBackground, View } from 'react-native';
import { Card, Block, NavBar, Icon, theme, Text } from 'galio-framework';
const { width, height } = Dimensions.get('screen');
import { useFocusEffect } from '@react-navigation/native';
import ClearFaves from './ClearFaves';


export const getFavouritesAsync = async () => {
  const item = await AsyncStorage.getItem('favourites')
  const obj = JSON.parse(item);
  return obj;
}

export const pushFavouritesRecipes = (state) => {
  const keys = Object.keys(state)
  let results = [];
  for ( let item of keys.filter((x)=> x!== "recipeId")) {
    results.push(state[item]);
  }
  return results;
}


export default function Favourites (props){

const [state, setState] = useState("")
const recipes = pushFavouritesRecipes(state);
const [display, setDisplay] = useState('none')


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
  noRadius: {
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  nav: {
    backgroundColor: "lightsalmon",
  },
  backgroundImage: {
    width:'100%',
    height:'100%'
  },
  emptyList : {
    alignSelf: 'center',
    backgroundColor:'rgba(255, 255, 255, 0.90)',
    padding:20,
    borderColor: "lightsalmon",
    borderWidth: 8,
    width: width * .80,
    height: height * .65,
    borderRadius: 20,
    justifyContent:'center',
    //display: display,
    marginTop: height * .11
  },
  heading: {
    textAlign: "center",
    color: '#606060',
    lineHeight:40
  },
  text : {
    textAlign: "center",
    color: 'grey',
    fontSize: 15
  }
});
  
  useEffect(()=>{state ? setDisplay('none') : setDisplay('flex')},[state])
  useFocusEffect(
    useCallback(() => {
      getFavouritesAsync().then((favouritesState) => {setState(state=>({...favouritesState }))}) 
    
    },[])
  )

    return (
      <Block safe flex style={{ backgroundColor: theme.COLORS.WHITE }}>
      <NavBar style = {styles.nav}
          title="Favourites"
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
          {/* <Button onPress={ClearFaves}/> */}
          {recipes.length !== 0 
          ? null 
          : <ImageBackground source={require("./photos/food1.jpg")} style={styles.backgroundImage}>           
            <View style={styles.emptyList}>
              <Text h5 style={styles.heading}>Your Favourites Is Empty!</Text>
              <Text h6 style={styles.text}>Pick Your Favourites To See Them Here</Text>
            </View></ImageBackground>}
        <ScrollView contentContainerStyle={styles.cards}>
          <Block flex space="between">
            {recipes && recipes.map((recipe, id) => (
                <TouchableOpacity style={styles.card} onPress={() => {props.navigation.navigate('faveRecipe', {recipe});}}>
                <Card
                  key={recipe.id}
                  avatar='https://storage.needpix.com/rsynced_images/pale-pink-heart.jpg'
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

