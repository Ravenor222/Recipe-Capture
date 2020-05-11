import React from 'react';
import { NavigationContainer, useNavigationState } from '@react-navigation/native';
import HomeNav from './components/Home/HomeNav';
import Profile from './components/Profile/Profile';
import FavouritesNav from './components/Favourites/FavouritesNav';
import MakeLaterNav from './components/MakeLater/MakeLaterNav';
import { createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem, } from '@react-navigation/drawer';
import SearchResultsNav from './components/SearchResults/SearchResultsNav';
import { StackActions } from '@react-navigation/native';

// const CustomDrawerContent = (props) => {
//   // const state1 = useNavigationState(state => state);

//   return(
//     <DrawerContentScrollView {...props}
//     forceInset={{ top: 'always', horizontal: 'never' }}
//     >
//       <DrawerItemList {...props} />
//       <DrawerItem label="Home" onPress={()=>{
//         props.navigation.dispatch(StackActions.popToTop());
//         props.navigation.navigate('Recipe Capture');
//         // props.navigation.closeDrawer();
//       }}/>
//       {/* <DrawerItem label="Saved For Later" onPress={()=>{
//         props.navigation.navigate('')
//       }}/> */}
//       {/* <DrawerItem label="Favourites2" onPress={()=>{
//       props.navigation.navigate('Favourites')

//       }}/> */}
//     </DrawerContentScrollView>
//   )
// };


const Drawer = createDrawerNavigator();

export default function App() {

  console.disableYellowBox = true;
  return (
    
    <NavigationContainer >
      <Drawer.Navigator dinitialRouteName="Home" >
        <Drawer.Screen name="Home" component={HomeNav} />
        <Drawer.Screen name="Profile" component={Profile} />
        <Drawer.Screen name="Favourites" component={FavouritesNav} />
        <Drawer.Screen name="Saved for Later" component={MakeLaterNav} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
