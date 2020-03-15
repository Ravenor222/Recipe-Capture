require('dotenv').config()
const express = require('express')
const app = express()
const PORT = 3001;
const bodyParser = require("body-parser");
const identifyImage = require('./components/helpers/clarifai_helper');
const getRecipes = require('./components/helpers/spoonacular_helper')

app.use(bodyParser.urlencoded({extended: true, parameterLimit: 100000, limit: '50mb'}));
app.use(bodyParser.json({limit: '50mb'}))

app.get('/', function (req, res) {
  res.send("You're at the root")
})

//https://api.spoonacular.com/recipes/complexSearch? 
//excludeIngredients=kale
//&addRecipeInformation=true
//&cuisine=Japanese
//&diet=vegan
//&maxFat=55
//&number=5
//&apiKey=${API_KEY}



//https://api.spoonacular.com/recipes/complexSearch?excludeIngredients=${}

app.post('/', (req,res)=>{
  console.log(req.body)
  identifyImage(req.body.data.photo)
  .then((response) => {
    const results = [];
    const filtered = (response.outputs[0].data.concepts.filter( x => x.value > 0.70 && x.name !== "vegetable" && x.name !== "relish" && x.name !== "sweet" && x.name !== "juice" && x.name !== "pasture" && x.name !== "herb" && x.name !== "condiment" && x.name !== "fruit" && x.name !== "citrus"))
    for (let item of filtered) {
      results.push(item.name)
    }
    //THESE ARE THE SPOONACULAR RESULTS WITH THE GIVEN TAGS
    const recipes = getRecipes(process.env.SPOON_KEY, results)
  })
  .catch((err) => alert(err))

})

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}!`);
});