import MyCarousel from './SearchResultCards'
import React, { useState, useCallback } from 'react';
import SearchIngredients from './SearchIngredients'
import { useFocusEffect } from '@react-navigation/native';
import { StyleSheet, TouchableOpacity, View, SafeAreaView } from 'react-native';
import { NavBar, Icon, theme } from 'galio-framework';
import axios from 'axios';
import { StackActions, NavigationActions } from 'react-navigation';


export default function SearchResults(props){

  const[recipes, setRecipes] = useState(1)
  const[ingredients, setIngredients] = useState('')

  useFocusEffect(
    useCallback(() => {
      axios.get('http://192.168.1.72:3001/')
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
        {console.log(recipes)}
        <MyCarousel recipes={recipes} navigation={props.navigation}/>
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
