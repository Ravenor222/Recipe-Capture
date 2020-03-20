const axios = require('axios')

const getRecipes = async (API_KEY, results, time, cuisine) => {

    cuisine === 'Any' || cuisine === undefined  ? cuisine = null : cuisine = cuisine
    time === 'Any' || time === undefined  ? time = 300 : time = time.slice(0,2)

    
    let result = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?includeIngredients=${results.join(",+")}&instructionsRequired=true&excludeIngredients=${null}&fillIngredients=true&intolerances=${null}&addRecipeInformation=true&cuisine=${cuisine}&diet=${null}&maxReadyTime=${time}&number=5&apiKey=${API_KEY}`)
    .then(result => result.data.results)
    .catch(err => console.log(err))
    return result;
}

module.exports = getRecipes;