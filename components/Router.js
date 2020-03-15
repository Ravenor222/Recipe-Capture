import React from 'react'
import { StackNavigator } from 'react-navigation'
import Home from './Home.js'
import CameraApp from './Camera'
import Profile from './Profile'

const Router = StackNavigator({
  home: { screen: Home },
  camera: { screen: CameraApp },
  profile: { screen: Profile }, 
 },
 {
  initialRouteName: login,
 });
export default Router