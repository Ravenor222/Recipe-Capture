// a checkbox for intolerances
import React, { useState } from 'react';
import { View ,Text } from 'react-native';
// import { Text } from 'galio-framework'
import MultiSelect from 'react-native-multiple-select'

const items = [{
    id: '1',
    name: 'Keto',
}, {
    id: '2',
    name: "Gluten-Free",
},  {
    id: '3',
    name: "Gluten-Free2",
},  {
    id: '4',
    name: "Gluten-Free3",
},  {
    id: '5',
    name: "Gluten-Free4",
},  {
    id: '6',
    name: "Gluten-Free5",
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
            setState(state.filter(number => number !== x[x.length-1]))
          } else {
            setState([...state, x[x.length-1]])
          }
        }}
        selectedItems={state}
        selectText="Pick Items"
        searchInputPlaceholderText="Search Items..."
        onChangeInput={x => console.log("hi")}
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