// a checkbox for intolerances
import React, { useState } from 'react';
import { View ,Text } from 'react-native';
// import { Text } from 'galio-framework'
import MultiSelect from 'react-native-multiple-select'


function handleConfirm(pItems){
    console.log('pItems =>', pItems);
}

const items = [{
    id: '1',
    name: 'Keto',
}, {
    id: '2',
    name: "Gluten-Free",
}]

const CheckboxIntolerances = () => {
  const [state, setState] = useState([])

    return (
    <View style={{ flex: 1 }}>
      <MultiSelect
        hideTags
        items={items}
        uniqueKey="id"
        onSelectedItemsChange={(x) => {
          if (state.includes(x[x.length-1])) {
            console.log(state)
          } else {
            setState([...state, x[x.length-1]])
          }
          console.log(state)
        }}
        selectedItems={state}
        selectText="Pick Items"
        searchInputPlaceholderText="Search Items..."
        onChangeInput={ (text)=> console.log(text)}
        // altFontFamily="ProximaNova-Light"
        tagRemoveIconColor="#CCC"
        tagBorderColor="#CCC"
        tagTextColor="#CCC"
        selectedItemTextColor="#CCC"
        selectedItemIconColor="#CCC"
        itemTextColor="#000"
        displayKey="name"
        searchInputStyle={{ color: '#CCC' }}
        submitButtonColor="#CCC"
        submitButtonText="Submit"
        />
    </View>
    )
}

export default CheckboxIntolerances