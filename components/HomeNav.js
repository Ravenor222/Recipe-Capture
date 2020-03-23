import React from 'react';
import CameraApp from './Camera';
import { createStackNavigator } from '@react-navigation/stack';
import { StackActions, NavigationActions } from 'react-navigation';
import Home from './Home'
import SearchResults from './SearchResults';
import LoadingScreen from './LoadingScreen'
import searchRecipe from './searchRecipe';


export default function HomeNav ({navigation}){

  const Stack = createStackNavigator();
  
  return (

    <Stack.Navigator>
      <Stack.Screen name="Homescreen" component={Home} options={{
        title: null,
        headerShown: false }} />
      <Stack.Screen name="Camera" component={CameraApp} options={{
        title: null,
        headerTransparent: true,
        headerBackTitleStyle: {
          color: 'white',
          },
          headerTintColor: "white"
      }}/>
      <Stack.Screen name="Loading" component={LoadingScreen} options={{
          title:null,
          headerShown:false,
      }} />
      <Stack.Screen name="RecipeResult" component={SearchResults} options={{
        title: null,
        headerShown: false, }} />
      <Stack.Screen name="searchRecipe" component={searchRecipe} options={{
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
