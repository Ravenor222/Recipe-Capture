import React, {useContext} from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { ProfileContext } from './ProfileContext';

export default function RecipeListCard(props){

  return(
    <View>
      <Text>
        Card component to display: 
        - Image
        - Recipe name
      </Text>
    </View>
  )

}