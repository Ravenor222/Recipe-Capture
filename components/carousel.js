import Carousel, { Pagination } from 'react-native-snap-carousel';
import React from 'react';
import { View, Text, Dimensions, StyleSheet } from 'react-native';
import SliderEntry from './SliderEntry'
import {Card} from 'galio-framework'

let recipes = [
  {title: 'Pie', subtitle: '45 minutes', illustration: 'https://images-gmi-pmc.edge-generalmills.com/94323808-18ab-4d37-a1ef-d6e1ff5fc7ae.jpg'},
  {title: 'Pasta', subtitle: '30 minutes', illustration: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/190305-lemon-garlic-asparagus-pasta-horizontal-161-1553190755.jpg'}
]
function wp (percentage) {
  const value = (percentage * viewportWidth) / 100;
  return Math.round(value);
}
const entryBorderRadius = 8;
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

const slideHeight = viewportHeight * 0.36;
const slideWidth = wp(75);
const itemHorizontalMargin = wp(2);

const itemWidth = slideWidth + itemHorizontalMargin * 2;

export default function MyCarousel (props) {

  const sliderWidth = Dimensions.get('window').width;

  const _renderItem = ({item}) => {
    return <SliderEntry data={item}/>;
  }
        return (
          <Card
          flex
          borderless
          title="Christopher Moon"
          caption="139 minutes ago"
          location="Los Angeles, CA"
          avatar="http://i.pravatar.cc/100?id=skater"
          image="https://images.unsplash.com/photo-1497802176320-541c8e8de98d?&w=1600&h=900&fit=crop&crop=entropy&q=300"
        />
            
           //<View style={styles.exampleContainer, styles.shadow}>
                   //<Carousel
      //             data={recipes}
      //             renderItem={_renderItem}
      //             sliderWidth={sliderWidth}
      //             sliderHeight={slideHeight}
      //             itemWidth={itemWidth}
      //             layout={'default'}
      //             loop={true}
      //           />
      // </View>
        );      
}

const styles = StyleSheet.create({
  exampleContainer: {
    marginVertical: 30
},
  shadow: {
      position: 'absolute',
      bottom: 0,
      left: itemHorizontalMargin,
      right: itemHorizontalMargin,
      bottom: 30,
      shadowColor: 'black',
      shadowOpacity: 0.25,
      shadowOffset: { width: 0, height: 10 },
      shadowRadius: 10,
      borderRadius: entryBorderRadius
  }
});
