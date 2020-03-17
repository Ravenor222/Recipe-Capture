//test for async storage

import React from 'react'
import { Text, View, StyleSheet,AsyncStorage, TouchableOpacity } from 'react-native'

function saveData() {
    let user = "Nick";
    AsyncStorage.setItem("user", user)
}

const loadData = async () => {
    try {
        let user = await AsyncStorage.getItem('user')
        console.log(user);
    }
    catch(error) {
        console.log(error)
    }
}

function Storage() {
    return (
    
      <TouchableOpacity onPress={saveData}>
          <Text>Save Data</Text>
      </TouchableOpacity>
       <TouchableOpacity onPress={loadData}>
          <Text>Load Data</Text>
       </TouchableOpacity>
    )
}
