import React, { useContext } from 'react'
import { AsyncStorage, View } from 'react-native'
import { Button } from 'galio-framework';
import { StorageContext } from '../contexts/storageContext';

const obj = {

}


const ProfileButton = (props) => {
    const [state, setState] = useContext(StorageContext);
    const stringState = JSON.stringify(state)
    const selected = props.state[0]
    const setSelected = props.state[1];



 const storeData = async () => {
     try {
        console.log(state);
       await AsyncStorage.setItem('state',stringState );
     } catch (error) {
        console.log(error);
     }
   };
 const saveObj = () => {
    for (let key of selected.keys()) {
        obj[key] = selected.get(key);
        console.log("1")
    }
     const filtered = Object.entries(obj).filter((x) => x[1]);
     const results = (filtered.map(x=> (x[0])));
     console.log("")
     setState(state => ({...state, intolerances:results}));
 }
    return(
        <Button 
        shadowless size="small" 
        iconSize={50} color="error" 
        style={props.style}
        onPress={async () => {
            saveObj();
            await storeData()
        }}
        >
        Save Settings
      </Button>

    )
}

export default ProfileButton