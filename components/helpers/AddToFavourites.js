const addToFavourites = async () => {
    try {
      const item = await AsyncStorage.getItem('state')
      let state = JSON.parse(item);
      state['favourites'] = recipes[0];
      const stringState = JSON.stringify(state);
      await AsyncStorage.setItem('state', stringState)
    }
    catch(err) {
      console.log(err);
    }

  }

export default addToFavourites 


