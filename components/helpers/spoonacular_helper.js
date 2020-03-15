
const axios = require('axios')

function getRecipes(API_KEY, results) {
    axios.get(`https://api.spoonacular.com/recipes/complexSearch?includeIngredients=${results.join(",+")}&excludeIngredients=${null}&intolerances=${null}&addRecipeInformation=true&cuisine=${null}&diet=${null}&maxFat=55&number=5&apiKey=${API_KEY}`)
    .then(function (result) {
       console.log(result.status)
    
       if (result.status === 200){
           console.log(results)
          console.log(result.data)
          
    
       };
    });
}

module.exports = getRecipes