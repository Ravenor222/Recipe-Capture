import React from 'react';
import {
  ScrollView, StyleSheet, Dimensions, Platform, TouchableOpacity
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

// Galio components
import {
  Card, Block, NavBar, Icon, theme
} from 'galio-framework';

const { width } = Dimensions.get('screen');

export default function RecipeCard({id, title, image, time}) {
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
)
}