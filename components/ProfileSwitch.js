import React, { useContext } from 'react'
import { Text, View } from 'react-native'
import { Button, Switch, Input, Block } from 'galio-framework'
import { StorageContext } from '../contexts/storageContext';



const ProfileSwitch = () => {
    const [state, setState] = useContext(StorageContext);

    return (
        <Switch 
        style={{alignSelf:'center'}} 
        onChange={(value)=>{setState(state => ({...state, pantry:value}));}}
        />
    )
};

export default ProfileSwitch