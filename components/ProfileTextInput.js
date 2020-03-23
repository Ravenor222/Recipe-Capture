import React, { useContext } from 'react'
import {Input} from 'galio-framework'
import { StorageContext } from '../contexts/storageContext';

const ProfileInput = () => {
    const [state, setState] = useContext(StorageContext);

    const stateSetter =  (value) => {
        setState(state =>({...state, allergies:value}))
    }

    return(
        <Input
        onChangeText={stateSetter}
        style={{alignSelf:'center', width:'80%', label:'white'}}
        placeholder="Allergies, Comma-seperated"
        right
        icon="heart"
        family="antdesign"
        iconSize={14}
        iconColor="red"
        />
    )
}

export default ProfileInput;