import MyCarousel from './SearchResultCards'
import React, { useEffect, useState,useCallback } from 'react';
import SearchIngredients from './SearchIngredients'
import { useFocusEffect } from '@react-navigation/native';;
import { StyleSheet, TouchableOpacity, View, ImageBackground } from 'react-native';
import { NavBar, Icon, theme } from 'galio-framework';
import Nav from './Nav';
import axios from 'axios';

let ingredients = ['Apple', 'Mango']


export default function SearchResults(props){

  const[recipes, setRecipes] = useState(1)

  useFocusEffect(
    useCallback(() => {
      axios.get('http://192.168.1.79:3001/')
      .then(res => setRecipes(res.data))
      .catch(err => console.log(err, "error"));
    },[])
  )


  console.log(recipes)

  return(
    <>
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
          titleStyle={{ color:'white', fontSize:25 }}
        />
        <View>
          {/* <ImageBackground source={require("./photos/food.png")} style={styles.backgroundImage}></ImageBackground> */}
          <MyCarousel recipes={recipes} navigation={props.navigation}/>
          <SearchIngredients ingredients={ingredients}/>
        </View>
    </>
  )

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
