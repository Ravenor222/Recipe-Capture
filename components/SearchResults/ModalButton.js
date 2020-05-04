import React, { useContext } from 'react'
import { AsyncStorage } from 'react-native'
import { Button } from 'galio-framework';
import {ModalContext} from '../../contexts/modalContext'
import { setNumberStorage } from '../helpers/setNumberStorage'

const ModalButton = (props) => {
    const [numberState, setNumberState] = useContext(ModalContext);
    const { modalState, setModalState, setNumberStorage } = props



    return(
        <Button 
        shadowless size="small" 
        onPress={()=>{setNumberStorage(modalState, setModalState)}}
        style={{alignSelf:'center', backgroundColor:'lightsalmon'}}
        >
        Save Settings
      </Button>

    )
};

export default ModalButton;