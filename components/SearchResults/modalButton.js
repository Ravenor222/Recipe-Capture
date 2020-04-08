import React, { useContext } from 'react'
import { AsyncStorage, Alert } from 'react-native'
import { Button } from 'galio-framework';
import {ModalContext} from '../../contexts/modalContext'

const ModalButton = (props) => {
    const [numberState, setNumberState] = useContext(ModalContext);

  const storeData = async () => {
     try {
       await AsyncStorage.setItem('state', stringState );
     } catch (error) {
        console.log(error);
     }
   };

    return(
        <Button 
        shadowless size="small" 
        onPress={()=>{console.log(numberState)}}
        >
        Save Settings
      </Button>

    )
};

export default ModalButton;