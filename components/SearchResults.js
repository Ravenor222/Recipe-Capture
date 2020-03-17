import { ProfileContext } from '../contexts/ProfileContext';
import MyCarousel from './SearchResultCards'
import React from 'react';
import SearchIngredients from './SearchIngredients';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { NavBar, Icon, theme } from 'galio-framework';
import Nav from './Nav';

let ingredients = ['Apple', 'Lettuce', 'Egg', 'Mango', 'Garlic']

export default function SearchResults(props){

  return(
    <>
      <NavBar style = {styles.nav}
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
          <MyCarousel/>
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