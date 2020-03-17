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

export default function IngredientList({name}) {
  return (
    <View style={styles.item}>
      <Text>• {name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'white',
    padding: 5,
    marginVertical: 8,
    marginHorizontal: 16
  }
});