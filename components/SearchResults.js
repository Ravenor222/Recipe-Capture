import { ProfileContext } from './ProfileContext';
import MyCarousel from './SearchResultCards'
import React from 'react';
import SearchIngredients from './SearchIngredients';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import { NavBar, Icon, theme } from 'galio-framework';

let ingredients = ['Apple', 'Lettuce', 'Pie']

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
      {/* <SearchIngredients ingredients={ingredients}/> */}
      <MyCarousel/>
    </>
  )

}
const styles = StyleSheet.create({
  nav : {
    backgroundColor: 'lightsalmon'
  }
})