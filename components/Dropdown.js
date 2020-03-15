import React, { useContext } from 'react';
import { ProfileContext } from './ProfileContext';
import { Dropdown } from 'react-native-material-dropdown';
import { StyleSheet} from 'react-native';

const DropDownComponent = ({list, preference, label}) => {
  let styles = StyleSheet.create({
    dropdown:{
      backgroundColor: "white",
      width: '80%',
      alignSelf: "center",
      paddingLeft: 5, 
      paddingRight: 5
    
    }
  });
    const [state, setState] = useContext(ProfileContext);
    return(
      <Dropdown 
      label={label}
      data={list} 
      preference={preference}
      onChangeText={(value => setState(state => ({...state, preference: value})))}
      containerStyle={styles.dropdown}
      />
    )
}
export default DropDownComponent