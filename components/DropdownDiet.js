import React, { useContext } from 'react';
import { ProfileContext } from './ProfileContext';
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
    return(
      <Dropdown 
      label={"Diet"}
      data={diet} 
      onChangeText={(value)=>{
          //ASYNCSTORAGE HERE
         console.log(value)
      }}
      containerStyle={props.style}
      />
    )
}
export default DropdownDietComponent

