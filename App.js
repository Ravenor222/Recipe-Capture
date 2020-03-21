import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import HomeNav from './components/HomeNav';
import Home from './components/Home'
import Profile from './components/Profile';
import FavouritesNav from './components/FavouritesNav';
import MakeLaterNav from './components/MakeLaterNav';
import { createDrawerNavigator } from '@react-navigation/drawer';
import SearchResultsNav from './components/SearchResultsNav';



const Drawer = createDrawerNavigator();

export default function App() {


  return (
    
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeNav} />
        <Drawer.Screen name="Profile" component={Profile} />
        <Drawer.Screen name="Favourites" component={FavouritesNav} />
        <Drawer.Screen name="Saved for Later" component={MakeLaterNav} />
        <Drawer.Screen name="Search Results" component={SearchResultsNav} />

      </Drawer.Navigator>
    </NavigationContainer>
  );
}
