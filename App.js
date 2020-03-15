import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import HomeNav from './components/HomeNav';
import Profile from './components/Profile';
import Favourites from './components/Favourites';
import MakeLater from './components/MakeLater';
import { createDrawerNavigator } from '@react-navigation/drawer';


const Drawer = createDrawerNavigator();

export default function App() {


  return (
    
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeNav} />
        <Drawer.Screen name="Profile" component={Profile} />
        <Drawer.Screen name="Favourites" component={Favourites} />
        <Drawer.Screen name="Saved for Later" component={MakeLater} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
