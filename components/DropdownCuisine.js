import React, { useContext } from 'react';
import { ProfileContext } from './ProfileContext';
import { Dropdown } from 'react-native-material-dropdown';
import { StyleSheet} from 'react-native';

const DropDownCuisineComponent = ({list,style, label}) => {
    const [state, setState] = useContext(ProfileContext);
    return(
      <Dropdown 
      label={label}
      data={list} 
      onChangeText={(value)=>{setState(state => ({...state, cuisine:value}));}}
      containerStyle={style}
      />
    )
}
export default DropDownCuisineComponent