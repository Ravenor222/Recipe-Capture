import React, {useContext} from 'react';
import { View, TouchableOpacity, StyleSheet} from 'react-native';
import { Text } from 'galio-framework'
import { ProfileContext } from './ProfileContext';
import MyCarousel from './SearchResultCards'

export default function SearchResults(props){

  return(
    <>
      <Text h3>
        Recipes
      </Text>
      <MyCarousel/>
    </>
  )

}