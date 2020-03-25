import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import HomeNav from './components/Home/HomeNav';
import Profile from './components/Profile/Profile';
import FavouritesNav from './components/Favourites/FavouritesNav';
import MakeLaterNav from './components/MakeLater/MakeLaterNav';
import { createDrawerNavigator } from '@react-navigation/drawer';
import SearchResultsNav from './components/SearchResults/SearchResultsNav';




const Drawer = createDrawerNavigator();

export default function App() {

  console.disableYellowBox = true;
  return (
    
    <NavigationContainer style={{backgroundColor:'red'}}>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeNav}/>
        <Drawer.Screen name="Profile" component={Profile} />
        <Drawer.Screen name="Favourites" component={FavouritesNav} />
        <Drawer.Screen name="Saved for Later" component={MakeLaterNav} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
