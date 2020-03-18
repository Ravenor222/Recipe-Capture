import React from 'react'
import { AsyncStorage } from 'react-native'

const addToSaved = async (recipe, recipeId) => {
  try {
    const item = await AsyncStorage.getItem('saved')
    let saved = JSON.parse(item);
    
    if ( saved === null ) {
      
      saved = {
        recipeId:recipe
      }
      
      const stringsaved = JSON.stringify(saved);
      return await AsyncStorage.setItem('saved', stringsaved)
      
    }
    
    saved[recipeId] = recipe;
    const stringsaved = JSON.stringify(saved);
    await AsyncStorage.setItem('saved', stringsaved)
  }
  catch(err) {
    console.log(err);
  }
  
}  


export default addToSaved










// const addToMakeLater = async () => {
//     try {
//       const item = await AsyncStorage.getItem('state')
//       let state = JSON.parse(item);
//       state['saved'] = recipes[0];
//       const stringState = JSON.stringify(state);
//       await AsyncStorage.setItem('state', stringState)
//     }
//     catch(err) {
//       console.log(err);
//     }

//   }
