const axios = require('axios')

const getRecipes = async (API_KEY, results, time, cuisine, intolerances, pantry, allergies, diet) => {
    console.log(intolerances, pantry, allergies, diet, "spoonacular helper")

    intolerances === undefined || intolerances.length === 0   ? intolerances = null : intolerances = intolerances;    // This should be an array
    allergies === null || allergies === undefined ? allergies = null : allergies = allergies    // This should be a string
    diet === null || diet === undefined ? diet = null : diet = diet                                       // This should be a string
    cuisine === 'Any' || cuisine ===undefined  ? cuisine = null : cuisine = cuisine // This should be a string
    time === 'Any' || time === undefined  ? time = 300 : time = time.slice(0,2)     // This should be an integer
    console.log(diet);
    
    let result = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?includeIngredients=${results.join(",+")}&instructionsRequired=true&excludeIngredients=${null}&fillIngredients=true&intolerances=${null}&addRecipeInformation=true&cuisine=${cuisine}&diet=vegetarian&maxReadyTime=${time}&number=5&apiKey=${API_KEY}`)
    .then(result => result.data.results)
    .catch(err => console.log(err))
    return result;
}

module.exports = getRecipes;