import React from 'react';
import RecipeCard from './RecipeCard';
import {
  ScrollView, StyleSheet, Dimensions, Platform, TouchableOpacity
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

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

const styles = StyleSheet.create({
    cards: {
      width,
      backgroundColor: theme.COLORS.WHITE,
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
    card: {
      backgroundColor: theme.COLORS.WHITE,
      width: width - theme.SIZES.BASE * 2,
      marginVertical: theme.SIZES.BASE * 0.875,
      elevation: theme.SIZES.BASE / 2,
      justifyContent: 'flex-start',
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

const list = recipes.map((recipe) => {
  return (
      <Card
        key={recipe.id}
        flex
        borderless
        shadowColor={theme.COLORS.BLACK}
        titleColor={recipe.full ? theme.COLORS.WHITE : null}
        style={styles.card}
        title={recipe.title}
        caption={`Ready in ${recipe.readyInMinutes} minutes`}
        image={recipe.image}
        imageStyle={[recipe.padded ? styles.rounded : null]}
        imageBlockStyle={[
          recipe.padded ? { padding: theme.SIZES.BASE / 2 } : null,
          recipe.full ? null : styles.noRadius,
        ]}
        footerStyle={recipe.full ? styles.full : null}
      />

    )}
  )
  

export default class MakeLater extends React.Component {
  render() {
    const { navigation } = this.props;
    return (
      <Block safe flex style={{ backgroundColor: theme.COLORS.WHITE }}>
        <NavBar style={styles.nav}
          title="Saved Recipes"
          left={(
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <Icon 
                name="menu"
                family="feather"
                size={theme.SIZES.BASE}
                color={theme.COLORS.ICON}
              />
            </TouchableOpacity>
          )}
          style={Platform.OS === 'android' ? { marginTop: theme.SIZES.BASE } : null}
        />
        <ScrollView contentContainerStyle={styles.cards}>
          <Block flex space="between">
            {list}
          </Block>
        </ScrollView>
      </Block>
    );
  }
}