import React, {useContext} from 'react';
import { Text, View, TouchableOpacity,ImageBackground, AsyncStorage, StyleSheet } from 'react-native';
import { Button, theme,NavBar ,Icon, Block } from 'galio-framework'
import ProfileButton from '../components/ProfileButton'
import ProfileSwitch from '../components/ProfileSwitch'
import ProfileInput from '../components/ProfileTextInput'
import ProfileIntolerances from '../components/CheckboxIntolerances'
import DropdownCuisineComponent from './DropdownCuisine';
import DropdownDietComponent from './DropdownDiet';
import { StorageContextProvider } from '../contexts/storageContext';
import { ProfileContext } from '../contexts/ProfileContext';
import Nav from './Nav';


const retrieveData = async () => {
  try {
    const value = await AsyncStorage.getItem('state');
    console.log(value);
    
  } catch (error) {
    console.log(error);
  }
};


let styles = StyleSheet.create({
  backgroundImage: {
    width:'100%',
    height:'100%',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between'
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
  },
  
});

export default function Profile(props){
  const [selected, setSelected] = React.useState(new Map());

  return(
    <ImageBackground source={require("./photos/food1.jpg")} style={styles.backgroundImage}>
      <NavBar style ={{backgroundColor:'lightsalmon'}}
          title="Profile"
          left={(
            <TouchableOpacity onPress={() => props.navigation.openDrawer()}>
              <Icon 
                name="menu"
                family="feather"
                size={25}
                color={theme.COLORS.WHITE}
              />
            </TouchableOpacity>
          )}
          titleStyle={{ color:'white', fontSize:25 }}/>
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
          <View style={{flex:0.42}}>
            <ProfileIntolerances state={[selected, setSelected]}/>
          </View>
      
       <ProfileSwitch /> 
       <ProfileButton state={[selected, setSelected]} style={{alignSelf:'center', width:'80%', backgroundColor:'#962131'}}/>
     </View>

    {/* </View> */}
    </StorageContextProvider>
    </ImageBackground>
  )

}