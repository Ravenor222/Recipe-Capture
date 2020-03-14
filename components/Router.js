import React from 'react'
import { StackNavigator } from 'react-navigation'
import Home from './Home.js'
import CameraApp from './Camera'

const Router = StackNavigator({
  home: { screen: Home },
  camera: { screen: CameraApp },
 },
 {
  initialRouteName: login,
 });
export default Router