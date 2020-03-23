import React, { useContext } from 'react';
import { StorageContext } from '../contexts/storageContext';
import { Dropdown } from 'react-native-material-dropdown';

let diet = [{
    value: 'Gluten Free'
  }, {
    value: 'Ketogenic'
  }, {
    value: 'Vegetarian'
  }, {
    value: 'Lacto-Vegetarian'
  }, {
    value: 'Ovo-Vegetarian'
  }, {
    value: 'Vegan'
  }, {
    value: 'Pescatarian'
  }, {
    value: 'Paleo'
  }]

const DropdownDietComponent = (props) => {

const [state, setState] = useContext(StorageContext);

    return(
      <Dropdown 
      label={"Diet"}
      data={diet} 
      onChangeText={(value)=>{setState(state => ({...state, diet:value}));}}
      containerStyle={props.style}
      />
    )
}

export default DropdownDietComponent

