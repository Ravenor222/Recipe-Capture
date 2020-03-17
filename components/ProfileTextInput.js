import React, { useContext } from 'react'
import { Text, View } from 'react-native'
import {Input, Block } from 'galio-framework'
import { StorageContext } from '../contexts/storageContext';

const ProfileInput = () => {
    const [state, setState] = useContext(StorageContext);

    return(
        <Input
        onChange={value => console.log(value.nativeEvent.text)}
        // onChange={
        //     (value) =>{setState(state =>({...state, allergies:value.nativeEvent.text}));
        //     console.log(value.nativeEvent.text)
        // }}
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
export default ProfileInput