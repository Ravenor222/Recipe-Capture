const axios = require('axios')

const getRecipes = async (API_KEY, results) => {

    let result = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?includeIngredients=${results.join(",+")}&instructionsRequired=true&excludeIngredients=${null}&intolerances=${null}&addRecipeInformation=true&cuisine=${null}&diet=${null}&maxFat=55&number=5&apiKey=${API_KEY}`)
    .then(result => result.data.results)
    .catch(err => console.log(err))
    return result;
}

module.exports = getRecipes;