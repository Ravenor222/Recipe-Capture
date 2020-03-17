import React, { useContext } from 'react'
import { Text, View } from 'react-native'
import {Input, Block } from 'galio-framework'
// import { Input} from 'react-native-elements'
import { StorageContext } from '../contexts/storageContext';

const ProfileInput = () => {
    const [state, setState] = useContext(StorageContext);

    const stateSetter =  (value) => {
        setState(state =>({...state, allergies:value}))
    }

    return(
        <Input
        // onChange={value => console.log(value.nativeEvent.text)}
        onChangeText={stateSetter}
        style={{alignSelf:'center', width:'80%', label:'white'}}
        placeholder="Allergies, Comma-seperated"
        right
        icon="heart"
        family="antdesign"
        iconSize={14}
        iconColor="red"
        />
        // <Input
        // onChangeText={stateSetter}
        // placeholder='INPUT WITH ICON'
        // leftIcon={{ type: 'font-awesome', name: 'chevron-left' }}
        // />
    )


}
export default ProfileInput