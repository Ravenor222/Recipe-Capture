import React from 'react';
import {
  ScrollView, StyleSheet, Dimensions, Platform, TouchableOpacity
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Nav from './Nav';
// Galio components
import {
  Card, Block, NavBar, Icon, theme
} from 'galio-framework';

const { width } = Dimensions.get('screen');

const recipes = [{ 
    id: 1,
    title: 'Chicken Caesar Salad with Grilled Romaine',
    readyInMinutes: 10,
    image: 'https://spoonacular.com/recipeImages/593906-312x231.jpg',
    imageType: 'jpg'
   },
   { 
    id: 2,
    title: 'Chicken Caesar Salad with Grilled Romaine',
    readyInMinutes: 20,
    image: 'https://spoonacular.com/recipeImages/593906-312x231.jpg',
    imageType: 'jpg'
   },
   { 
    id: 3,
    title: 'Chicken Caesar Salad with Grilled Romaine',
    readyInMinutes: 15,
    image: 'https://spoonacular.com/recipeImages/593906-312x231.jpg',
    imageType: 'jpg'
   },
   { 
    id: 4,
    title: 'Chicken Caesar Salad with Grilled Romaine',
    readyInMinutes: 10,
    image: 'https://spoonacular.com/recipeImages/593906-312x231.jpg',
    imageType: 'jpg'
   }
  ]
  

export default class Favourites extends React.Component {
  render() {
    const { navigation } = this.props;
    return (
      <Block safe flex style={{ backgroundColor: theme.COLORS.WHITE }}>
        <Nav title="My Favourites" navigation={navigation} />
        <ScrollView contentContainerStyle={styles.cards}>
          <Block flex space="between">
            {recipes && recipes.map((recipe, id) => (
                <TouchableOpacity style={styles.card} onPress={() => { alert(`You've clicked`); }}>
                <Card
                  key={recipe.id}
                  flex
                  borderless
                  shadowColor={theme.COLORS.BLACK}
                  titleColor={recipe.full ? theme.COLORS.WHITE : null}
                  style={styles.cardBackground}
                  title={recipe.title}
                  caption={`Ready in ${recipe.readyInMinutes} minutes`}
                  image={recipe.image}
                  imageStyle={[recipe.padded ? styles.rounded : null]}
                  imageBlockStyle={[
                    recipe.padded ? { padding: theme.SIZES.BASE / 2 } : null,
                    recipe.full ? null : styles.noRadius,
                  ]}
                  footerStyle={recipe.full ? styles.full : null}
                >
                  {recipe.full ? <LinearGradient colors={['transparent', 'rgba(0,0,0, 0.8)']} style={styles.gradient} /> : null}
                </Card>
              </TouchableOpacity>
            ))}
          </Block>
        </ScrollView>
      </Block>
    );
  }
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
  full: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
  },
  noRadius: {
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  rounded: {
    borderRadius: theme.SIZES.BASE * 0.1875,
  },
  gradient: {
    bottom: 0,
    left: 0,
    right: 0,
    height: 90,
    position: 'absolute',
    overflow: 'hidden',
    borderBottomRightRadius: theme.SIZES.BASE * 0.5,
    borderBottomLeftRadius: theme.SIZES.BASE * 0.5,
  },
  nav: {
    backgroundColor: "#FE2472"
  }
});