import React, {useContext} from 'react';
import { Text, View, TouchableOpacity,ImageBackground, AsyncStorage, StyleSheet } from 'react-native';
import { Button, Switch, Input, Block } from 'galio-framework'
import ProfileButton from '../components/ProfileButton'
import ProfileSwitch from '../components/ProfileSwitch'
import ProfileInput from '../components/ProfileTextInput'
import DropdownCuisineComponent from './DropdownCuisine';
import DropdownDietComponent from './DropdownDiet';
import { StorageContextProvider } from '../contexts/storageContext';
import { ProfileContext } from './ProfileContext';


//What do I want?
//1: Allergies form
//2: intolerances checkbox
//3: diet dropdown
//4: switch for pantry
//5: all of these need to save to local storage
//6:  

let styles = StyleSheet.create({
  backgroundImage: {
    width:'100%',
    height:'100%',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  button: {
    alignSelf: "center"
  },
  dropdown:{
    backgroundColor: "white",
    width: '80%',
    alignSelf: "center",
    paddingLeft: 5,
    paddingRight: 5,
    marginTop:10
  }
});

export default function Profile(props){

  return(
    <ImageBackground source={require("./photos/food1.jpg")} style={styles.backgroundImage}>
    <StorageContextProvider>
    {/* <View style={{flex:1}}> */}

      {/* <View style={{flex:0.3, backgroundColor:'red', flexDirection:'column', justifyContent:'flex-end'}}>
        <Text style={{color:'white', alignSelf:'center', paddingBottom:20}}>
          I'm someone
        </Text>
      </View> */}

     <View style={{flex:1, justifyContent:'space-around'}}>
        <DropdownDietComponent style={styles.dropdown}/>

        <ProfileInput />
       
       {/* this is complete */}
        <ProfileSwitch /> 
      {/* {this is complete} */}
        <ProfileButton style={{alignSelf:'center', width:'80%'}}/>
     </View>

    {/* </View> */}
    </StorageContextProvider>
    </ImageBackground>
  )

}