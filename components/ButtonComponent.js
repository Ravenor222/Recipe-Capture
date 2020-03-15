import React, { useContext } from 'react'
import { Button } from 'galio-framework';
import { ProfileContext } from './ProfileContext';

const ButtonComponent = (props) => {
    const [state, setState] = useContext(ProfileContext);

    return(
        <Button 
        shadowless size="small" 
        iconSize={50} color="error" 
        style={props.style} 
        onPress={() => {props.navigation.navigate('Camera', {state: state});}} 
        >
        {state.name + state.cuisine + state.time}
      </Button>
    )
}

export default ButtonComponent