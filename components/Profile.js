import React, {useContext} from 'react';
import { Text, View, TouchableOpacity, AsyncStorage, ImageBackground, StyleSheet } from 'react-native';
import { ProfileContext } from './ProfileContext';
import DropdownCuisineComponent from './DropdownCuisine';
import DropdownDietComponent from './DropdownDiet';
import CheckboxIntolerances from './CheckboxIntolerances'


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
    <View style={{flex:1}}>

      <View style={{flex:0.3, backgroundColor:'red', flexDirection:'column', justifyContent:'flex-end'}}>
        <Text style={{color:'white', alignSelf:'center', paddingBottom:20}}>
          I'm someone
        </Text>
      </View>

     <View style={{flex:0.70}}>
        <DropdownDietComponent style={styles.dropdown}/>
        <CheckboxIntolerances />
     </View>
    </View>
    </ImageBackground>
  )

}