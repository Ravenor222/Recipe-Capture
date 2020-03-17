const axios = require('axios')

function getRecipes(API_KEY, results) {
    console.log(results.join(",+"))
    axios.get(`https://api.spoonacular.com/recipes/complexSearch?includeIngredients=${results.join(",+")}&excludeIngredients=${null}&intolerances=${null}&addRecipeInformation=true&cuisine=${null}&diet=${null}&maxFat=55&number=5&apiKey=${API_KEY}`)
    .then(function (result) {
       console.log(result.status)
       if (result.status === 200){
          console.log(result.data)
       };
    })
    .catch(err => console.log(err))
}

module.exports = getRecipes