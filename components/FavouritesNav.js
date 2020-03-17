import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Favourites from './Favourites';
import Recipe from './Recipe';



export default function FavouritesNav ({navigation}){
  const Stack = createStackNavigator();
  return (

    <Stack.Navigator>
      <Stack.Screen name="Favourites" component={Favourites} options={{
        title: null,
        headerShown: false }} />
      <Stack.Screen name="Recipe" component={Recipe} options={{
        title: null,
        headerTransparent: true,
        headerBackTitleStyle: {
          color: 'white',
          },
          headerTintColor: "white"
      }}/>
    </Stack.Navigator>
  )


}
