import React, {useContext} from 'react';
import Nav from './Nav';
import { View, TouchableOpacity, ShadowPropTypesIOS, StyleSheet } from 'react-native';
import { ProfileContext } from '../contexts/ProfileContext';

import {
  Card, Block, NavBar, Icon, theme, Text
} from 'galio-framework';


const styles = StyleSheet.create({
  header: {
    height: 80,
    paddingTop: 28,
    paddingBottom: 28,
    backgroundColor: 'white'
  },
  title: {
    textAlign: "center", 
    color: "black",
    fontSize: 18,
    fontWeight: "bold"
  },
  time: {
    textAlign: "center",
    marginTop: 6,
    color: 'gray',
    fontSize: 13,
    fontStyle: 'italic'
}
})

export default function Header({title, time}) {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.time}>Ready in {time} minutes</Text>
    </View>
  )
}