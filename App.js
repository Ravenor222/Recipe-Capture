import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
//import { createStackNavigator } from '@react-navigation/stack';
import Home from './components/Home';
import HomeNav from './components/HomeNav';
import CameraApp from './components/Camera'
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
// import CustomDrawerContent from './components/Nav';
//import Nav from "./components/Nav";
//import { Colors } from 'react-native/Libraries/NewAppScreen';

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
};

const Drawer = createDrawerNavigator();
//const Stack = createStackNavigator();

export default function App() {


  return (
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="HomeNav">
          <Drawer.Screen name="HomeNav" component={HomeNav} />
          <Drawer.Screen name="Notifications" component={NotificationsScreen} />
        </Drawer.Navigator>
{/*    
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
        </Stack.Navigator> */}
      </NavigationContainer>
  );
}
