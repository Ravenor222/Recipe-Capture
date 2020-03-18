import React, { useContext } from 'react'
import { Text, View } from 'react-native'
import { Button, Switch, Input, Block } from 'galio-framework'
import { StorageContext } from '../contexts/storageContext';


const ProfileSwitch = () => {
    const [state, setState] = useContext(StorageContext);

    return (

        <Block style={{backgroundColor:'transparent', flexDirection:'row', justifyContent:'space-around',}}>
                    <Text style={{marginLeft:'10%', alignSelf:'center', color:'white', fontSize:20,textShadowOffset:{width:-1, height:1}, textShadowColor:'rgba(0, 0, 0, 1)',textShadowRadius: 10}}>
                        Include pantry?
                    </Text>
            
                    <Switch 
                    style={{alignSelf:'center', marginRight:'18%', backgroundColor:"red"}} 
                    onChange={(value)=>{setState(state => ({...state, pantry:value}));}}
                    />

        </Block>

    )
};

export default ProfileSwitch