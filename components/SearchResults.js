import MyCarousel from './SearchResultCards'
import React, { useEffect, useState,useCallback } from 'react';
import SearchIngredients from './SearchIngredients'
import { useFocusEffect } from '@react-navigation/native';
import { StyleSheet, TouchableOpacity, View, ImageBackground, SafeAreaView } from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';
import { NavBar, Icon, theme } from 'galio-framework';
import Nav from './Nav';
import axios from 'axios';



export default function SearchResults(props){

  const[recipes, setRecipes] = useState(1)
  const[ingredients, setIngredients] = useState('')

  

  useFocusEffect(
    useCallback(() => {
      axios.get('http://192.168.1.79:3001/')

      .then(res => {
        //console.log(res.data.slice(1,), "search results"),
        // console.log(res.data, "data"),
        // console.log(res.data[0][0]),
        setIngredients(res.data[0])
        //returns everything but first elem
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
          titleStyle={{ color:'white', fontSize:25 }}
      />
      <View>
        {console.log(recipes)}
        <MyCarousel recipes={recipes} navigation={props.navigation}/>
        <SearchIngredients ingredients={ingredients} setRecipes={setRecipes} recipes={recipes}/>
      </View>
    </SafeAreaView>
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
