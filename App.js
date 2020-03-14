import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './components/Home';
import CameraApp from './components/Camera'
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default function App() {

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
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
    </NavigationContainer>
  );
}
