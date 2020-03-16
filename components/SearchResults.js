import React, {useContext} from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { ProfileContext } from './ProfileContext';
import MyCarousel from './SearchResultCards'

export default function SearchResults(props){

  return(
    <>
      <Text>
        Recipes
      </Text>
      <MyCarousel/>
    </>
  )

}