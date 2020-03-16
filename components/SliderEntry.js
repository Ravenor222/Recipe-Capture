import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import PropTypes from 'prop-types';

const IS_IOS = Platform.OS === 'ios';
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

function wp (percentage) {
    const value = (percentage * viewportWidth) / 100;
    return Math.round(value);
}

const slideHeight = viewportHeight * 0.52;
const slideWidth = wp(77);
const itemHorizontalMargin = wp(2);
const itemWidth = slideWidth + itemHorizontalMargin * 2;
const entryBorderRadius = 8;

export default class SliderEntry extends Component {

    static propTypes = {
        data: PropTypes.object.isRequired,
    };

    get image () {
      const { data: { illustration }} = this.props 
      return (
        <Image
          source={{ uri: illustration }}
          style={styles.image}
        />
      );
    }

    render () {
        const { data: { title, time, missing } } = this.props;

        const uppercaseTitle = title ? (
            <Text
              style={[styles.title]}
              numberOfLines={2}
            >
                { title.toUpperCase() }
            </Text>
        ) : false;

        const missingIng = missing ? (
          <Text
            style={[styles.time]}
            numberOfLines={2}
          >
            Missing Ingredients: { missing }
          </Text>
        ) : false;

        return (
            <TouchableOpacity
              activeOpacity={1}
              style={styles.slideInnerContainer}
              onPress={() => { alert(`You've clicked '${title}'`); }}>
                <View style={styles.shadow} />
                <View style={[styles.imageContainer]}>
                    { this.image }
                    <View style={[styles.radiusMask]} />
                </View>
                <View style={[styles.textContainer]}>
                    { uppercaseTitle }
                    { missingIng }
                    <Text
                      style={[styles.time]}
                      numberOfLines={2}
                    >
                    { time } minutes
                    </Text>
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
  slideInnerContainer: {
      width: itemWidth,
      height: slideHeight,
      paddingHorizontal: itemHorizontalMargin,
      paddingBottom: 18 // needed for shadow
  },
  shadow: {
      position: 'absolute',
      top: 0,
      left: itemHorizontalMargin,
      right: itemHorizontalMargin,
      bottom: 18,
      shadowColor: 'black',
      shadowOpacity: 0.25,
      shadowOffset: { width: 0, height: 10 },
      shadowRadius: 10,
      borderRadius: entryBorderRadius
  },
  imageContainer: {
      flex: 1,
      marginBottom: IS_IOS ? 0 : -1, // Prevent a random Android rendering issue
      backgroundColor: 'white',
      borderTopLeftRadius: entryBorderRadius,
      borderTopRightRadius: entryBorderRadius
  },
  image: {
      ...StyleSheet.absoluteFillObject,
      resizeMode: 'cover',
      borderRadius: IS_IOS ? entryBorderRadius : 0,
      borderTopLeftRadius: entryBorderRadius,
      borderTopRightRadius: entryBorderRadius
  },
  // image's border radius is buggy on iOS; let's hack it!
  radiusMask: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      height: entryBorderRadius,
      backgroundColor: 'white'
  },
  textContainer: {
      justifyContent: 'center',
      paddingTop: 20 - entryBorderRadius,
      paddingBottom: 20,
      paddingHorizontal: 16,
      backgroundColor: 'white',
      borderBottomLeftRadius: entryBorderRadius,
      borderBottomRightRadius: entryBorderRadius
  },
  title: {
      color: 'black',
      fontSize: 13,
      fontWeight: 'bold',
      letterSpacing: 0.5
  },
  time: {
      marginTop: 6,
      color: 'gray',
      fontSize: 12,
      fontStyle: 'italic'
  }
});
