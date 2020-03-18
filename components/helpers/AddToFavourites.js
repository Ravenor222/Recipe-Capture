import React from 'react';
import {AsyncStorage }from 'react-native';


const addToFavourites = async (recipe, recipeId) => {
    try {
      const item = await AsyncStorage.getItem('favourites')
      let favourites = JSON.parse(item);

        if ( favourites === null ) {
        console.log("im null")

        favourites = {
             recipeId:recipe
         }

          const stringFavourites = JSON.stringify(favourites);
          await AsyncStorage.setItem('favourites', stringFavourites)


        }
      console.log(favourites, "im past the if")
      favourites[recipeId] = recipe;
      const stringFavourites = JSON.stringify(favourites);
      await AsyncStorage.setItem('favourites', stringFavourites)
    }
    catch(err) {
      console.log(err);
    }

  }

export default addToFavourites 


