import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import HomeNav from './components/HomeNav';
import Profile from './components/Profile';
import FavouritesNav from './components/FavouritesNav';
import MakeLater from './components/MakeLater';
import MakeLaterNav from './components/MakeLaterNav';
import { createDrawerNavigator } from '@react-navigation/drawer';
import SearchResults from './components/SearchResults';


const Drawer = createDrawerNavigator();

export default function App() {


  return (
    
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeNav} />
        <Drawer.Screen name="Profile" component={Profile} />
        <Drawer.Screen name="Favourites" component={FavouritesNav} />
        <Drawer.Screen name="Saved for Later" component={MakeLaterNav} />
        <Drawer.Screen name="Recipes" component={SearchResults} />

      </Drawer.Navigator>
    </NavigationContainer>
  );
}
