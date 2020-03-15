import React, {useContext} from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { ProfileContext } from './ProfileContext';

export default function Recipe(props){

  return(
    <View>
      <Text>
        Recipe to include: 
        - image
        - title
        - description
        - ingredient list (+missing ingredients)
        - recipe directions 
        - nutrition chart
        - footer icons: Favourite, Save for Later
      </Text>
    </View>
  )

}