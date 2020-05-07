import React, { useState,useCallback ,useContext } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { Button } from 'react-native-elements';
import { theme } from 'galio-framework'
import { FlatList, View, StyleSheet, Dimensions, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconMI from 'react-native-vector-icons/MaterialIcons';
const { width: viewportWidth } = Dimensions.get('window');
import axios from 'axios'
import { getProfileStorageAsync } from '../helpers/getProfileStorageAsync';
import { getNumberStorageAsync } from '../helpers/getNumberStorageAsync';

import { IngredientsContext } from '../../contexts/IngredientsContext'

export default function SearchIngredients(props){

  useFocusEffect(
    useCallback(() => {
      axios.get('https://lit-river-70719.herokuapp.com/')

      .then(res => {
        console.log(ingredients);
        setIngredients(res.data[0])
        setRecipes(res.data.slice(1,));
        console.log(ingredients)
      })
      .catch(err => console.log(err, "error"));
    },[])
  )
    const ex = () => {return console.log('hello')}

  const {recipes, setRecipes} = props;
  const {modalState, setModalState, whichModal, setWhichModal } = props;
  // const [ingredients, setIngredients] = useState(props.ingredients);
  const [ingredients, setIngredients] = useContext(IngredientsContext);
  const profileSettings = getProfileStorageAsync()
  .then(x => x)  
  .catch(x=>console.error(x));

  const numberSettings = getNumberStorageAsync()
  .then(x=>x)
  .catch(x=>console.log(x));
  
  return (
    <View style={styles.container}>
      {console.log("Search ingredients: ", ingredients)}
      <FlatList horizontal
        showsHorizontalScrollIndicator={false}
        data={ingredients}
        renderItem={({item}) => 
        <Button title={item} 
        onPress={()=> { setIngredients(ingredients.filter(ing => { if(ing != item){return ing} }))}}
        icon={
          <Icon
            name='window-close'
            size={20}
            color='white'
            style={{marginLeft:8, marginTop: 4}}
          />} 
          iconRight
          style={styles.button}
          buttonStyle={{backgroundColor:'darkgrey', borderRadius: 8}}/>}
          keyExtractor={item => item}
      />

  <View style={styles.secondtier}>
      <Button 
      title ='Search Again' 
      style={styles.searchButton}
      buttonStyle={{backgroundColor:'lightsalmon', padding: 10, borderRadius: 8}}
      onPress={()=>{
        axios.post('https://lit-river-70719.herokuapp.com/recipes', {data:{ingredients, profileSettings, numberSettings}})
        .then((res)=>{
          console.log('successful post')
          setRecipes(res.data.slice(1,));
        })
        .catch((err)=> {
          console.log(err, "axios err 2")
        });
      }}
      >
      Search Again</Button>

     
    <Button
      style={styles.insertButton}
      title="Add"
      titleStyle={{fontSize:16}}
      buttonStyle={{backgroundColor:'lightsalmon', padding: 10, borderRadius: 8}}
      onPress={()=>{
        setModalState(!modalState);
        setWhichModal('addModal')

      }}
      icon={<IconMI 
        name="library-add"
        size={18}
        color='white'
        
      />}
    
    >
   </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    margin: 15,
    padding: 15,
    minWidth: viewportWidth - 30,
    minHeight: 125,
    backgroundColor:'white',
    borderRadius:10,
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
    position:'absolute',
    top:Dimensions.get('window').height-235
  },
  button:{
    alignSelf: "center",
    color:'white',
    width: 125,
    margin:2,

  },
  secondtier:{
    flexDirection:'row',
    justifyContent:'flex-end'
  }, 
  searchButton :{
    marginHorizontal: 25,
    // alignSelf:'center',
    // position:'absolute',
    // top:0,
  },
  insertButton: {
    // top:0,
    // alignSelf:'flex-end',
  }

})
