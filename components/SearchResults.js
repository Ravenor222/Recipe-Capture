import MyCarousel from './SearchResultCards'
import React, { useEffect, useState } from 'react';
import SearchIngredients from './SearchIngredients';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { NavBar, Icon, theme } from 'galio-framework';
import Nav from './Nav';
import axios from 'axios';
//import searchPage from './helpers/search_result_helper';

let ingredients = ['Apple', 'Mango']
const searchPage = (arr) => {
  let results = [];
  for(const item of arr){
    let obj = {title: item.title, time: item.readyInMinutes, missing: item.missedIngredientCount, illustration: item.image, id: item.id};
    results.push(obj);
  }
  return results;
}


export default function SearchResults(props){

  const[recipes, setRecipes] = useState(1)

  useEffect(() => {
    axios.get('http://192.168.1.72:3001/')
    .then(res => setRecipes(searchPage(res.data)))
    .catch(err => console.log(err));
  },[])

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
          <MyCarousel recipes={recipes}/>
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
  }
})