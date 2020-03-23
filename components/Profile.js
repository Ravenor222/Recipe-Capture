import React, { useState } from 'react';
import { View, TouchableOpacity,ImageBackground, StyleSheet, ScrollView } from 'react-native';
import { theme, NavBar ,Icon } from 'galio-framework'
import ProfileButton from '../components/ProfileButton'
import ProfileSwitch from '../components/ProfileSwitch'
import ProfileInput from '../components/ProfileTextInput'
import ProfileIntolerances from '../components/CheckboxIntolerances'
import DropdownDietComponent from './DropdownDiet';
import { StorageContextProvider } from '../contexts/storageContext';

let styles = StyleSheet.create({
  backgroundImage: {
    width:'100%',
    height:'100%'
  },
  button: {
    alignSelf: "center",
    borderRadius:10,
    marginVertical:30,

  },
  dropdown:{
    backgroundColor: "white",
    width: '80%',
    alignSelf: "center",
    paddingLeft: 5,
    paddingRight: 5,
    marginVertical:30,
    borderRadius:10,
    borderColor:'grey',
    borderWidth:1,
  },
  nav : {
    backgroundColor: 'lightsalmon'
  },
  
});

export default function Profile(props){
  const [selected, setSelected] = useState(new Map());

  return(
    <ImageBackground source={require("./photos/food3.jpg")} style={styles.backgroundImage}>
      <NavBar safe style = {styles.nav}
          title="Profile"
          left={(
            <TouchableOpacity onPress={() => props.navigation.openDrawer()}>
              <Icon 
                name="menu"
                family="feather"
                size={30}
                color={theme.COLORS.WHITE}
              />
            </TouchableOpacity>
          )}
          titleStyle={{ color:'white', fontSize:25 }}
      />
    <StorageContextProvider>
    <ScrollView containerStyle={{flex:1, justifyContent:'space-around'}}>
     <View style={{padding:10}}>
        <DropdownDietComponent style={styles.dropdown}/>
        <ProfileInput/>
          <View>
            <ProfileIntolerances state={[selected, setSelected]}/>
          </View>
       <ProfileSwitch /> 
       <ProfileButton state={[selected, setSelected]} style={{alignSelf:'center', width:'55%', backgroundColor:'lightsalmon',borderRadius:10}}/>
     </View>
    </ScrollView>         
    </StorageContextProvider>
    </ImageBackground>
  )

}