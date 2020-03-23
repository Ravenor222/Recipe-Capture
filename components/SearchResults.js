import MyCarousel from './SearchResultCards'
import React, { useState, useCallback, useLayoutEffect } from 'react';
import SearchIngredients from './SearchIngredients'
import { useFocusEffect } from '@react-navigation/native';
import { StyleSheet, TouchableOpacity, View, SafeAreaView } from 'react-native';
import { NavBar, Icon, theme } from 'galio-framework';
import axios from 'axios';
import { getFavouritesAsync } from './Favourites';
import { getSavedAsync } from './MakeLater';


export default function SearchResults(props){

  const [faveRecipes, setFaveRecipes] = useState("")
  const [savedRecipes, setSavedRecipes] = useState("")


  //Get current favourited recipes
  useFocusEffect(
    useCallback(() => {
      getFavouritesAsync().then((faveRecipes) => {setFaveRecipes(state=>(faveRecipes))}) 
    }, [])
  )
  
  //Get current saved recipes
  useFocusEffect(
    useCallback(() => {
      getSavedAsync().then((savedRecipes) => {setSavedRecipes(state=>(savedRecipes))}) 
    }, [])
  )

  const[recipes, setRecipes] = useState([]);
  const[ingredients, setIngredients] = useState('');
  const filteredRecipes = (original, faves, saves) => {
    if (faves === null & saves === null) {
      return original
    } else if (faves !== null && saves === null){
      return original.filter( recipe => !faves[recipe.id] )
    } else if (faves === null && saves !== null) {
      return original.filter(recipe => !saves[recipe.id] )
    } else {
      return original.filter(recipe => !faves[recipe.id] && !saves[recipe.id])
    }
  }
 

  useFocusEffect(
    useCallback(() => {
      axios.get('http://192.168.1.79:3001/')
      .then(res => {
        setIngredients(res.data[0])
        setRecipes(res.data.slice(1,));
      })
      .catch(err => console.log(err, "error"));
    },[])
  )
  

  return(
    <SafeAreaView>
      <NavBar safe style = {styles.nav}
          title="Recipes"
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
      <View>
        <MyCarousel recipes={filteredRecipes(recipes, faveRecipes, savedRecipes)} navigation={props.navigation}/>
        <SearchIngredients ingredients={ingredients} setRecipes={setRecipes} recipes={recipes}/>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  nav : {
    backgroundColor: 'lightsalmon'
  },
  container :{
    flex: 1,
    justifyContent:'space-between'
  },
  backgroundImage: {
    width:'100%',
    height:'100%',
    zIndex: -1
  }
});
