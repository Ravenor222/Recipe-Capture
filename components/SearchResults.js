import MyCarousel from './SearchResultCards'
import React, { useState, useCallback, useLayoutEffect } from 'react';
import SearchIngredients from './SearchIngredients'
import { useFocusEffect } from '@react-navigation/native';
import { StyleSheet, TouchableOpacity, View, SafeAreaView, ImageBackground, Dimensions } from 'react-native';
import { NavBar, Icon, theme, Text } from 'galio-framework';
import axios from 'axios';
import background from './photos/food1.jpg'
const { width, height } = Dimensions.get('screen');
import { getFavouritesAsync } from './Favourites';
import { getSavedAsync } from './MakeLater';


export default function SearchResults(props){

  useFocusEffect(
    useCallback(() => {

      axios.get('http://192.168.1.10:3001/')

      .then(res => {
        setIngredients(res.data[0])
        setRecipes(res.data.slice(1,));
      })
      .catch(err => console.log(err, "error"));
    },[])
  )

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

  const [recipes, setRecipes] = useState([]);
  const [ingredients, setIngredients] = useState(props.ingredients);
  const [faveRecipes, setFaveRecipes] = useState("");
  const [savedRecipes, setSavedRecipes] = useState("");


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
          titleStyle={{ color:'white', fontSize:30, fontFamily: 'Baskerville-Bold' }}/>
      <View style={{backgroundColor:'#F0F0F0'}}>
      {recipes.length !== 0 
          ? <><MyCarousel recipes={filteredRecipes(recipes, faveRecipes, savedRecipes)} navigation={props.navigation}/>
            <SearchIngredients ingredients={ingredients} setRecipes={setRecipes} recipes={filteredRecipes(recipes, faveRecipes, savedRecipes)}/></>
          : <ImageBackground source={background} style={styles.backgroundImage}>           
            <View style={styles.emptyList}>
              <Text h5 style={styles.heading}>No Recipes Found!</Text>
              <Text h6 style={styles.text}>Please Take Another Photo</Text>
            </View></ImageBackground>}
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  nav : {
    backgroundColor: 'lightsalmon'
  },
  backgroundImage: {
    width:'100%',
    height:'100%',
    zIndex: -1
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
