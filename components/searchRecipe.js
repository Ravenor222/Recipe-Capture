import React, {useState} from 'react';
import {  Dimensions, ScrollView, View, FlatList, StyleSheet, Image,  Alert } from 'react-native';
import  RecipeCard from './InstructionCard';
import IngredientList from './IngredientList';
import {toggleMakeLaterList, isSaved} from './helpers/toggleMakeLaterList';
import {toggleFavourites, isFavourited} from './helpers/toggleFavourites';
import { Block, theme, Text, Button } from 'galio-framework';

const IS_IOS = Platform.OS === 'ios';
const entryBorderRadius = 8;
const {width}  = Dimensions.get('screen');
const imageHeight = Math.round(Dimensions.width * 9 / 16);
const imageWidth = Dimensions.width;

const formatSummary = function(string) {
  return string.replace(/<\/?[^>]+(>|$)/g, "")
}

const formatIngredients = function(missed, used) {
  const results = [];
  for (let ing of missed) {
    results.push(ing["original"])
  };

  for (let ing of used) {
    results.push(ing["original"])
  }

  return results;
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    content: {
      padding: 40,
    },
    summary: {
      padding: 30,
      textAlign: "justify"
    },
    image: {
      ...StyleSheet.absoluteFillObject,
      resizeMode: 'cover',
      height: imageHeight, 
      width: imageWidth,
      borderRadius: IS_IOS ? entryBorderRadius : 0,
      borderTopLeftRadius: entryBorderRadius,
      borderTopRightRadius: entryBorderRadius
    },
    header: {
      height: 100,
      paddingTop: 28,
      paddingBottom: 28,
      backgroundColor: 'white'
    },
    title: {
      textAlign: "center", 
      color: "black",
      fontSize: 18,
      fontWeight: "bold"
    },
    time: {
      textAlign: "center",
      marginTop: 6,
      color: 'gray',
      fontSize: 13,
      fontStyle: 'italic'
    }
  });


export default function Recipe({route, navigation}){

  const {recipe} = route.params;
  const ingredients = formatIngredients(recipe.missedIngredients, recipe.usedIngredients);

  const [faveState, setFaveState] = useState({
    favourited: isFavourited(recipe.id) ? true : false,
    text: "Favourite",
    color: "lightsalmon"
  })
      
  const toggleFave = () => {
    const {favourited} = faveState;
      
    if (favourited) {
      setFaveState(prevState => ({
        favourited: false,
        text: "Favourite",
        color: "lightsalmon"
        }))
      } else {
        setFaveState(prevState => ({
          favourited: true, 
          text: "Favourited",
          color: "grey"
        }))
      }
  }
    
  const [makeLaterState, setMakeLaterState] = useState({
    saved: isSaved(recipe.id) ? true : false,
    text: "Save for later", 
    color: "lightsalmon"
  });
      
  const toggleMakeLater = () => {
    const {saved} = makeLaterState;
      
    if (saved) {
      setMakeLaterState(prevState => ({
        saved: false,
        text: "Save for later",
        color: "lightsalmon"
      }))
    } else {
      setMakeLaterState(prevState => ({
        saved: true, 
        text: "Saved",
        color: "grey"
      }))
    }
  };

  return(
    <Block safe flex style={{ backgroundColor: theme.COLORS.WHITE }}>
     <ScrollView style={{height:300}}>
      <Image source={{uri: recipe.illustration}}
       style={{width: 414, height: 300}} />
      <View style={styles.container}>
      {/* <Header recipe={recipe} toggleFave={toggleFave} faveState={faveState} saveState={saveState} toggleSave={toggleSave} /> */}
      <View style={styles.header}>
      <Text style={styles.title}>{recipe.title}</Text>
      <Text style={styles.time}>Ready in {recipe.time} minutes</Text>
      <Block style={{flex:1, flexDirection:'row', justifyContent: 'center'}}>

      <Button style={{width:'25%', marginHorizontal:8, backgroundColor: makeLaterState.color, shadowColor:'transparent', height:30, marginTop:10}} onPress={()=> {
        toggleMakeLaterList(recipe, recipe.id, makeLaterState.saved ? false : true).then(res => Alert.alert("Done!", "Your preferences have been updated" [{text: "Done", onPress: () => toggleMakeLater()}]));
      }}><Text style={{fontWeight:'bold', color:'white'}}>{makeLaterState.text}</Text></Button>
        
      <Button style={{ width:'25%', marginHorizontal:8, backgroundColor: faveState.color, shadowColor:'transparent', height:30, marginTop:10}} onPress={() => {
        toggleFavourites(recipe, recipe.id, faveState.favourited ? false : true).then(res => Alert.alert("Done!", "Your preferences have been updated", [{text: "Done", onPress: () => toggleFave()}]));
      }}><Text style={{fontWeight:'bold', color:'white'}}>{faveState.text}</Text></Button>

      </Block>
    </View>
      <Text style={styles.summary}>{formatSummary(recipe.summary)}</Text>
      <Text style={{padding: 20, fontSize: 25, fontWeight: "bold"}}>Ingredients:</Text>
      <FlatList
          data={ingredients}
          renderItem={({ item }) => <IngredientList name={item} />}
        />
      <View>
      <Text style={{padding: 20, fontSize: 25, fontWeight: "bold"}}>Directions:</Text>
        <FlatList
          data={recipe.instructions[0].steps}
          renderItem={({ item }) => <RecipeCard title={item.number} step={item.step} />}
        />
      </View>
    </View>
      </ScrollView>
    </Block>
  )
}

