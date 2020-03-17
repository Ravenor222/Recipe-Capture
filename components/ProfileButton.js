import React, { useContext } from 'react'
import { AsyncStorage, View } from 'react-native'
import { Button } from 'galio-framework';
import { StorageContext } from '../contexts/storageContext';


const ProfileButton = (props) => {
    const [state, setState] = useContext(StorageContext);
    const stringState = JSON.stringify(state)


 const storeData = async () => {
     try {
       await AsyncStorage.setItem('state',stringState );
     } catch (error) {
        console.log(error);
     }
   };

    return(
        <Button 
        shadowless size="small" 
        iconSize={50} color="error" 
        style={props.style}
        onPress={storeData}
        >
        Save Settings
      </Button>

    )
}

export default ProfileButton