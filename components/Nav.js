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

const styles = StyleSheet.create({
  nav : {
    backgroundColor: 'lightsalmon'
  }
})

export default function Nav({title, navigation}) {
  return (
  <NavBar style={styles.nav}
          title={title}
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
  )
}