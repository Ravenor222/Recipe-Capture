import React, { useState, useEffect } from 'react';
import { Button } from 'react-native-elements';
import { FlatList, View, StyleSheet, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
const { width: viewportWidth } = Dimensions.get('window');
import axios from 'axios'
import { getProfileStorageAsync } from '../helpers/getProfileStorageAsync';
import { getNumberStorageAsync } from '../helpers/getNumberStorageAsync';

export default function SearchIngredients(props){
  const {recipes, setRecipes} = props;
  const {modalState, setModalState, whichModal, setWhichModal } = props;
  const [ingredients, setIngredients] = useState(props.ingredients);
  
  const profileSettings = getProfileStorageAsync()
  .then(x => x)  
  .catch(x=>console.error(x));
  const numberSettings = getNumberStorageAsync()
  .then(x=>x)
  .catch(x=>console.log(x));

  console.log(props.params, "searchIngredients ")
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
      <Button 
      title ='Search Again' 
      style={styles.searchButton}
      buttonStyle={{backgroundColor:'lightsalmon', padding: 10, borderRadius: 8}}
      onPress={async ()=>{

        
        axios.post('https://lit-river-70719.herokuapp.com/recipes', {data:{ingredients, profileSettings, numberSettings}}).then((res)=>{

          setRecipes(res.data.slice(1,));
        }).catch((err)=> {
          console.log(err, "err")
        });
      }}>Search Again</Button>
      <Button
      style={styles.insertButton}
      title="Add"
      buttonStyle={{backgroundColor:'lightsalmon', padding: 10, borderRadius: 8}}
      onPress={()=>{
        setModalState(!modalState);
        console.log(props.whichModal)
        setWhichModal('addModal')

      }}
      // setIngredients(prev => ([...prev, 'pizza']))
      //onPress => Open a text element => On submit setIngredients

      >Add</Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    margin: 15,
    padding: 15,
    minWidth: viewportWidth - 30,
    minHeight: 135,
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
  searchButton :{
    marginTop: 10,
    alignSelf:'center',
  },
  insertButton: {
    bottom:44,
    alignSelf:'flex-end',
  }

})
