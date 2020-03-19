require('dotenv').config()
const express = require('express')
const app = express()
const PORT = 3001;
const bodyParser = require("body-parser");

const identifyImage = require('./components/helpers/clarifai_helper');
const getRecipes = require('./components/helpers/spoonacular_helper')

app.use(bodyParser.urlencoded({extended: true, parameterLimit: 100000, limit: '50mb'}));
app.use(bodyParser.json({limit: '50mb'}))
app.use(bodyParser.urlencoded({extended: true}));


var final = [];

app.get('/', function (req, res) {
  res.json(final);
})

app.post('/', async (req,res) => {

  let results = await identifyImage(req.body.data.photo)

  let filtered = results.filter( x => x.value > 0.80 && x.name !== "vegetable" && x.name !== "relish" && x.name !== "sweet" && x.name !== "juice" && x.name !== "pasture" && x.name !== "herb" && x.name !== "condiment" && x.name !== "fruit" && x.name !== "citrus")

  let ingredients = [];
  for (let item of filtered) {
    ingredients.push(item.name)
  }
  
  let recipes = await getRecipes(process.env.SPOON_KEY, ingredients)

  let recipesArray = [];
  for(const item of recipes){
    let obj = {title: item.title, time: item.readyInMinutes, missing: item.missedIngredientCount, illustration: item.image, id: item.id, instructions: item.analyzedInstructions, missedIngredients: item.missedIngredients, summary: item.summary, usedIngredients: item.usedIngredients};
    recipesArray.push(obj);
  }

  final = recipesArray;

})

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}!`);
});

