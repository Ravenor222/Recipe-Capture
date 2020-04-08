import React, { useContext } from 'react'
import { AsyncStorage, Alert } from 'react-native'
import { Button } from 'galio-framework';
import {ModalContext} from '../../contexts/modalContext'

const ModalButton = (props) => {
    const [numberState, setNumberState] = useContext(ModalContext);
    const stringNumberState = JSON.stringify(numberState)

    const storeData = async () => {
       try {
         await AsyncStorage.setItem('number', stringNumberState );
       } catch (error) {
          console.log(error);
       }
     };

    return(
        <Button 
        shadowless size="small" 
        onPress={storeData}
        >
        Save Settings
      </Button>

    )
};

export default ModalButton;