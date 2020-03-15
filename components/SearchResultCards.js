import React, {useContext} from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { ProfileContext } from './ProfileContext';

export default function SearchResultsCard(props){

  return(
    <View>
      <Text>
        Card component to display: 
        - Image
        - Recipe name
        - Estimated cooking time
        - Missing ingredients
      </Text>
    </View>
  )

}