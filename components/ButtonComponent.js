import React, { useContext } from 'react'
import { Button } from 'galio-framework';
import { ProfileContext } from './ProfileContext';

const ButtonComponent = (props) => {
    const [state, setState] = useContext(ProfileContext);

    return(
        <Button 
        shadowless size="small" 
        color='info'
        iconSize={50}
        style={props.style} 
        onPress={() => {props.navigation.navigate('Camera', {state: state});}} 
        >
        Start Now 
      </Button>
    )
}

export default ButtonComponent