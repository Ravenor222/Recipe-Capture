
import React from 'react';
import { ScrollView, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { Card, Block, NavBar, Icon, theme } from 'galio-framework';
import Nav from './Nav';

const { width } = Dimensions.get('screen');

const recipes = [{ 
    id: 1,
    title: 'Chicken Caesar Salad',
    readyInMinutes: 10,
    image: 'https://natashaskitchen.com/wp-content/uploads/2019/01/Caesar-Salad-Recipe-3.jpg',
    imageType: 'jpg'
   },
   { 
    id: 2,
    title: 'Chicken Caesar Salad',
    readyInMinutes: 20,
    image: 'https://natashaskitchen.com/wp-content/uploads/2019/01/Caesar-Salad-Recipe-3.jpg',
    imageType: 'jpg'
   },
   { 
    id: 3,
    title: 'Chicken Caesar Salad',
    readyInMinutes: 15,
    image: 'https://natashaskitchen.com/wp-content/uploads/2019/01/Caesar-Salad-Recipe-3.jpg',
    imageType: 'jpg'
   },
   { 
    id: 4,
    title: 'Chicken Caesar Salad',
    readyInMinutes: 10,
    image: 'https://natashaskitchen.com/wp-content/uploads/2019/01/Caesar-Salad-Recipe-3.jpg',
    imageType: 'jpg'
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
                <TouchableOpacity style={styles.card} onPress={() => { alert(`You've clicked`); }}>
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