import React, {useContext} from 'react';
import { Text, View, TouchableOpacity, AsyncStorage } from 'react-native';
import { Button } from 'galio-framework'
import { ProfileContext } from './ProfileContext';




export default function Favourites(props){

  const loadData = async () => {
    try {
        const user = await AsyncStorage.getItem('1')
        console.log(user)
    }
    catch(error) {
        console.log(error)
    }
  }

  const storeData = async () => {
    try {
      await AsyncStorage.setItem('test5', " why ");
    } catch (error) {
      // Error saving data
    }
  };

  
  return(
    <View>
      <Text>
        Favourites 
        - map through favourites and display in RECIPELISTCARD component
      </Text>
      <Button onPress={loadData}>test</Button>

      <TouchableOpacity onPress={storeData}>
          <Text>Save Data</Text>
      </TouchableOpacity>
       <TouchableOpacity onPress={loadData}>
          <Text>Load Data</Text>
       </TouchableOpacity>
    </View>
  )

}