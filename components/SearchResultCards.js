import Carousel, { Pagination } from 'react-native-snap-carousel';
import React, { useState } from 'react';
import { View, Dimensions, StyleSheet } from 'react-native';
import SliderEntry from './SliderEntry'

let recipes = [
  {title: 'Pie', time: '45', missing: 'Eggs, Cream', illustration: 'https://images-gmi-pmc.edge-generalmills.com/94323808-18ab-4d37-a1ef-d6e1ff5fc7ae.jpg'},
  {title: 'Pasta', time: '30', missing: 'Tomato, Garlic', illustration: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/190305-lemon-garlic-asparagus-pasta-horizontal-161-1553190755.jpg'},
  {title: 'Pho', time: '60', missing: '', illustration: 'https://www.recipetineats.com/wp-content/uploads/2019/04/Beef-Pho_6.jpg'}
]
function wp (percentage) {
  const value = (percentage * viewportWidth) / 100;
  return Math.round(value);
}

const { width: viewportWidth} = Dimensions.get('window');
const slideWidth = wp(75);
const itemHorizontalMargin = wp(2);
const itemWidth = slideWidth + itemHorizontalMargin * 2;
const sliderWidth = Dimensions.get('window').width;

export default function MyCarousel (props) {
  const [active, setActive] = useState(0)

  const _renderItem = ({item}) => {
    return <SliderEntry data={item}/>;
  }
  return (
    <View style={styles.exampleContainer, styles.shadow}>
      <Carousel
      data={recipes}
      renderItem={_renderItem}
      sliderWidth={sliderWidth}
      itemWidth={itemWidth}
      layout={'default'}
      loop={true}
      onSnapToItem={(index) => setActive( index ) }
      />
      <Pagination
      dotsLength={recipes.length}
      activeDotIndex={active}
      containerStyle={styles.paginationContainer}
      dotColor={'rgba(255, 255, 255, 0.92)'}
      dotStyle={styles.paginationDot}
      inactiveDotColor={'black'}
      inactiveDotOpacity={0.4}
      inactiveDotScale={0.8}
      />
    </View>
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
      shadowColor: 'black',
      shadowOpacity: 0.25,
      shadowOffset: { width: 0, height: 10 },
      shadowRadius: 10,
      borderRadius: 8
  }
});