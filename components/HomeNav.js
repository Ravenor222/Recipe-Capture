import React from 'react';
import CameraApp from './Camera';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Home'


export default function HomeNav ({navigation}){
  const Stack = createStackNavigator();
  return (

    <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} options={{
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
    </Stack.Navigator>
  )


}
