import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import Home from './Home.js'
import Profile from './Profile.js'

const Routes = () => (
   <Router>
      <Scene key = "root">
         <Scene key = "home" component = {Home} title = "Home" initial = {true} />
         <Scene key = "profile" component = {Profile} title = "Profile" />
      </Scene>
   </Router>
)
export default Routes