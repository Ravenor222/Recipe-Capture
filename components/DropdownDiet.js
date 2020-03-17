import React, { useContext } from 'react';
import { StorageContext } from '../contexts/storageContext';
import { Dropdown } from 'react-native-material-dropdown';
import { StyleSheet } from 'react-native'

let diet = [{
    value: 'GF'
  }, {
    value: 'Keto'
  } , {
    value: 'Atkins'
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

