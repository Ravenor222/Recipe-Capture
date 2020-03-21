import React, { useState } from 'react';
import { Button } from 'react-native-elements';
import { FlatList, View, StyleSheet, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import getRecipes from './helpers/spoonacular_helper';
const { width: viewportWidth } = Dimensions.get('window');

const searchPage = (arr) => {
  let results = [];
  for(const item of arr){
    let obj = {title: item.title, time: item.readyInMinutes, missing: item.missedIngredientCount};
    results.push(obj);
  }
  return results;
}

export default function SearchIngredients(props){

  const [ingredients, setIngredients] = useState(['apple', 'banana'])

  return (
    <View style={styles.container}>
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
        let result = ingredients.length !== 0 ? await getRecipes("4b42fc1d242b48f4bf390ebe7c9192da", ingredients) : false;
        // searchPage(result);
        console.log(result);
      }}>Search Again</Button>
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
    top:400
  },
  button:{
    alignSelf: "center",
    color:'white',
    width: 114,
    margin:2,

  }, 
  searchButton :{
    marginTop: 10,
    alignSelf:'center'
  }
})
