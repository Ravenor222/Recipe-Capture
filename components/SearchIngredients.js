import React from 'react';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function SearchIngredients(props){
  props.ingredient

  return (
    <ul>{
      props.ingredients.map(ingredient =>{
        return (
          <Button
          title={item}
          iconRight
          icon={
            <Icon
              name='window-close'
              size={15}
              color='white'
            />
          }
        />
      )})
    }</ul>);

}