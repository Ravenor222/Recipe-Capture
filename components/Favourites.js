
import React from 'react';
import { ScrollView, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { Card, Block, NavBar, Icon, theme } from 'galio-framework';
import Nav from './Nav';

const { width } = Dimensions.get('screen');

const recipes = [{ 
  id: 1,
  title: 'Chicken Caesar Salad with Grilled Romaine',
  readyInMinutes: 10,
  image: 'https://spoonacular.com/recipeImages/593906-312x231.jpg',
  imageType: 'jpg',
  summary:
 'The recipe Chicken Caesar Salad with Grilled Romaine is ready <b>in roughly 10 minutes</b> and is definitely a spectacular <b>gluten free and primal</b> option for lovers of American food. One serving contains <b>559 calories</b>, <b>18g of protein</b>, and <b>48g of fat</b>. For <b>$2.63 per serving</b>, this recipe <b>covers 33%</b> of your daily requirements of vitamins and minerals. It will be a hit at your <b>The Fourth Of July</b> event. If you have olive oil, sea salt, garlic, and a few other ingredients on hand, you can make it. To use up the olive oil you could follow this main course with the <a href="https://spoonacular.com/recipes/sauteed-banana-granola-and-yogurt-parfait-624619">Sauteed Banana, Granolan and Yogurt Parfait</a> as a dessert. Plenty of people made this recipe, and 152 would say it hit the spot. It works well as a main course.',
  ingredients: ["1 tbsp butter", "2 tbsp grated cheese (I used romano)", "1-2 tbsp extra virgin olive oil", "5-6 cloves garlic", "6-8 ounces pasta (I used linguine)"],
  instructions: [
    {
        "number": 1,
        "step": "Preheat the oven to 200 degrees F."
    },
    {
        "number": 2,
        "step": "Whisk together the flour, pecans, granulated sugar, light brown sugar, baking powder, baking soda, and salt in a medium bowl."
    },
    {
        "number": 3,
        "step": "Whisk together the eggs, buttermilk, butter and vanilla extract and vanilla bean in a small bowl."
    }
  ]
 },
 { 
  id: 2,
  title: 'Chicken Caesar Salad with Grilled Romaine',
  readyInMinutes: 20,
  image: 'https://spoonacular.com/recipeImages/593906-312x231.jpg',
  imageType: 'jpg',
  summary:
  'The recipe Chicken Caesar Salad with Grilled Romaine is ready <b>in roughly 10 minutes</b> and is definitely a spectacular <b>gluten free and primal</b> option for lovers of American food. One serving contains <b>559 calories</b>, <b>18g of protein</b>, and <b>48g of fat</b>. For <b>$2.63 per serving</b>, this recipe <b>covers 33%</b> of your daily requirements of vitamins and minerals. It will be a hit at your <b>The Fourth Of July</b> event. If you have olive oil, sea salt, garlic, and a few other ingredients on hand, you can make it. To use up the olive oil you could follow this main course with the <a href="https://spoonacular.com/recipes/sauteed-banana-granola-and-yogurt-parfait-624619">Sauteed Banana, Granolan and Yogurt Parfait</a> as a dessert. Plenty of people made this recipe, and 152 would say it hit the spot. It works well as a main course.',
   ingredients: ["1 tbsp butter", "2 tbsp grated cheese (I used romano)", "1-2 tbsp extra virgin olive oil", "5-6 cloves garlic", "6-8 ounces pasta (I used linguine)"],
   instructions: [
     {
         "number": 1,
         "step": "Preheat the oven to 200 degrees F."
     },
     {
         "number": 2,
         "step": "Whisk together the flour, pecans, granulated sugar, light brown sugar, baking powder, baking soda, and salt in a medium bowl."
     },
     {
         "number": 3,
         "step": "Whisk together the eggs, buttermilk, butter and vanilla extract and vanilla bean in a small bowl."
     }
   ]
 },
 { 
  id: 3,
  title: 'Chicken Caesar Salad with Grilled Romaine',
  readyInMinutes: 15,
  image: 'https://spoonacular.com/recipeImages/593906-312x231.jpg',
  imageType: 'jpg',
  summary:
  'The recipe Chicken Caesar Salad with Grilled Romaine is ready <b>in roughly 10 minutes</b> and is definitely a spectacular <b>gluten free and primal</b> option for lovers of American food. One serving contains <b>559 calories</b>, <b>18g of protein</b>, and <b>48g of fat</b>. For <b>$2.63 per serving</b>, this recipe <b>covers 33%</b> of your daily requirements of vitamins and minerals. It will be a hit at your <b>The Fourth Of July</b> event. If you have olive oil, sea salt, garlic, and a few other ingredients on hand, you can make it. To use up the olive oil you could follow this main course with the <a href="https://spoonacular.com/recipes/sauteed-banana-granola-and-yogurt-parfait-624619">Sauteed Banana, Granolan and Yogurt Parfait</a> as a dessert. Plenty of people made this recipe, and 152 would say it hit the spot. It works well as a main course.',
   ingredients: ["1 tbsp butter", "2 tbsp grated cheese (I used romano)", "1-2 tbsp extra virgin olive oil", "5-6 cloves garlic", "6-8 ounces pasta (I used linguine)"],
   instructions: [
     {
         "number": 1,
         "step": "Preheat the oven to 200 degrees F."
     },
     {
         "number": 2,
         "step": "Whisk together the flour, pecans, granulated sugar, light brown sugar, baking powder, baking soda, and salt in a medium bowl."
     },
     {
         "number": 3,
         "step": "Whisk together the eggs, buttermilk, butter and vanilla extract and vanilla bean in a small bowl."
     }
   ]
 },
 { 
  id: 4,
  title: 'Chicken Caesar Salad with Grilled Romaine',
  readyInMinutes: 10,
  image: 'https://spoonacular.com/recipeImages/593906-312x231.jpg',
  imageType: 'jpg',
  summary:
  'The recipe Chicken Caesar Salad with Grilled Romaine is ready <b>in roughly 10 minutes</b> and is definitely a spectacular <b>gluten free and primal</b> option for lovers of American food. One serving contains <b>559 calories</b>, <b>18g of protein</b>, and <b>48g of fat</b>. For <b>$2.63 per serving</b>, this recipe <b>covers 33%</b> of your daily requirements of vitamins and minerals. It will be a hit at your <b>The Fourth Of July</b> event. If you have olive oil, sea salt, garlic, and a few other ingredients on hand, you can make it. To use up the olive oil you could follow this main course with the <a href="https://spoonacular.com/recipes/sauteed-banana-granola-and-yogurt-parfait-624619">Sauteed Banana, Granolan and Yogurt Parfait</a> as a dessert. Plenty of people made this recipe, and 152 would say it hit the spot. It works well as a main course.',
   ingredients: ["1 tbsp butter", "2 tbsp grated cheese (I used romano)", "1-2 tbsp extra virgin olive oil", "5-6 cloves garlic", "6-8 ounces pasta (I used linguine)"],
   instructions: [
     {
         "number": 1,
         "step": "Preheat the oven to 200 degrees F."
     },
     {
         "number": 2,
         "step": "Whisk together the flour, pecans, granulated sugar, light brown sugar, baking powder, baking soda, and salt in a medium bowl."
     },
     {
         "number": 3,
         "step": "Whisk together the eggs, buttermilk, butter and vanilla extract and vanilla bean in a small bowl."
     }
   ]
 }
]
  

export default function Favourites (props){
    return (
      <Block safe flex style={{ backgroundColor: theme.COLORS.WHITE }}>
{/* //       <Nav title="My Favourites" navigation={props.navigation} /> */}
      <NavBar style = {styles.nav}
          title="Favourites"
          left={(
            <TouchableOpacity onPress={() => props.navigation.openDrawer()}>
              <Icon 
                name="menu"
                family="feather"
                size={25}
                color={theme.COLORS.WHITE}
              />
            </TouchableOpacity>
          )}
          titleStyle={{ color:'white', fontSize:25 }}/>
        <ScrollView contentContainerStyle={styles.cards}>
          <Block flex space="between">
            {recipes && recipes.map((recipe, id) => (
                <TouchableOpacity style={styles.card} onPress={() => {props.navigation.navigate('Recipe', {recipe});}}>
                <Card
                  key={recipe.id}
                  avatar='https://storage.needpix.com/rsynced_images/pale-pink-heart.jpg'
                  title={recipe.title.toUpperCase()}
                  borderless
                  shadowColor={theme.COLORS.BLACK}
                  style={styles.cardBackground}
                  caption={`Ready in ${recipe.readyInMinutes} minutes`}
                  image={recipe.image}
                  imageBlockStyle={[styles.noRadius]}
                  footerStyle={{paddingLeft: 5, marginRight:70}}
                >
                </Card>
              </TouchableOpacity>
            ))}
          </Block>
        </ScrollView>
      </Block>
    );
  }

const styles = StyleSheet.create({
  cards: {
    width,
    backgroundColor: theme.COLORS.WHITE,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  cardBackground:{
    backgroundColor: theme.COLORS.WHITE,
  },
  card: {
    width: width - theme.SIZES.BASE * 2,
    marginVertical: theme.SIZES.BASE * 0.875,
    elevation: theme.SIZES.BASE / 2,
  },
  noRadius: {
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  nav: {
    backgroundColor: "lightsalmon",
  }
});