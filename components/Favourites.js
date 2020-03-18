
import React, {useEffect, useState} from 'react';
import { ScrollView, StyleSheet, Dimensions, TouchableOpacity,AsyncStorage } from 'react-native';
import { Card, Block, NavBar, Icon, theme, Button } from 'galio-framework';
const { width } = Dimensions.get('screen');

const getFavouritesAsync = async () => {
  const item = await AsyncStorage.getItem('favourites')
  const obj = JSON.parse(item);
  console.log(obj);
  return obj;
}

const pushFavouritesRecipes = (state) => {
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



  useEffect(() => {
    getFavouritesAsync().then((favouritesState) => {setState(state=>({...favouritesState }))}) 

  });/// -> Need to depend on a value to update, but what?



    return (
      <Block safe flex style={{ backgroundColor: theme.COLORS.WHITE }}>
{/* //       <Nav title="My Favourites" navigation={props.navigation} /> */}
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
          <Button onPress={()=>{console.log(recipes)}}/>
        <ScrollView contentContainerStyle={styles.cards}>
          <Block flex space="between">
            {recipes && recipes.map((recipe, id) => (
                <TouchableOpacity style={styles.card} onPress={() => {props.navigation.navigate('Recipe', {recipe});}}>
                <Card
                  key={recipe.id}
                  avatar='https://storage.needpix.com/rsynced_images/pale-pink-heart.jpg'
                  title={recipe.title.toUpperCase()}
                  borderless
                  shadowColor={theme.COLORS.BLACK}
                  style={styles.cardBackground}
                  caption={`Ready in ${recipe.readyInMinutes} minutes`}
                  image={recipe.image}
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
  noRadius: {
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  nav: {
    backgroundColor: "lightsalmon",
  }
});