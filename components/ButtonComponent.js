import React, { useContext } from 'react'
import { Button } from 'galio-framework';



import { ProfileContext } from './ProfileContext';

const ButtonComponent = (props) => {
    const [state, setState] = useContext(ProfileContext);
    return(
        <Button onPress={() => console.log(state)}>
        {/* {state.name + state.cuisine + state.time} */}
        
      </Button>
    )
}

export default ButtonComponent