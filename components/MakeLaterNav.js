import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MakeLater from './MakeLater';
import Recipe from './Recipe';



export default function MakeLaterNav ({navigation}){
  const Stack = createStackNavigator();
  return (

    <Stack.Navigator>
      <Stack.Screen name="Make Later" component={MakeLater} options={{
        title: null,
        headerShown: false }} />
      <Stack.Screen name="Recipe" component={Recipe} options={{
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
