import React from 'react';
import {
  ScrollView, StyleSheet, Dimensions, Platform, TouchableOpacity, View
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

// Galio components
import {
  Card, Block, NavBar, Icon, theme, Text
} from 'galio-framework';

const { width } = Dimensions.get('screen');

export default function RecipeCard({id, title, step}) {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>Step {title}</Text>
      <Text>{step}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'white',
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black"
  },
});