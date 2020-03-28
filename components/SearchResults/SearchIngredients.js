import React, { useState } from 'react';
import { Button } from 'react-native-elements';
import { FlatList, View, StyleSheet, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
const { width: viewportWidth } = Dimensions.get('window');
import axios from 'axios'
import { getProfileStorageAsync } from '../helpers/getProfileStorageAsync';

export default function SearchIngredients(props){
  const {recipes, setRecipes} = props
  const [ingredients, setIngredients] = useState(props.ingredients)
  
  const profileSettings = getProfileStorageAsync()
  .then(x => x)  
  .catch(x=>console.error(x));

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
        axios.post('http://192.168.1.72:3001/recipes', {data:{ingredients, profileState:profileSettings}}).then((res)=>{
          setRecipes(res.data.slice(1,));
        }).catch((err)=> {
          console.log(err, "err")
        });
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
    top:485
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
  }
})
