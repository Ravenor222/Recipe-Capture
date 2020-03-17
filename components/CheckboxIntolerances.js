


import React from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Text,
} from 'react-native';
import Constants from 'expo-constants';

const DATA = [
  {
    id: 'Dairy',
    title: 'Dairy',
  },
  {
    id: 'Keto',
    title: 'Keto',
  },
  {
    id: 'Gluten-free1',
    title: 'Gluten-free1',
  },
  {
    id: 'Gluten-free2',
    title: 'Gluten-free2',
  },
  {
    id: 'Gluten-free3',
    title: 'Gluten-free3',
  },
  {
    id: 'Gluten-free4',
    title: 'Gluten-free4',
  },
  {
    id: 'Gluten-free5',
    title: 'Gluten-free5',
  },
  {
    id: 'Gluten-free6',
    title: 'Gluten-free6',
  },
  {
    id: 'Gluten-free7',
    title: 'Gluten-free7',
  },
  {
    id: 'Gluten-free8',
    title: 'Gluten-free8',
  },
  {
    id: 'Gluten-free9',
    title: 'Gluten-free9',
  },
  {
    id: 'Gluten-free10',
    title: 'Gluten-free10',
  },
  
];


function Item({ id, title, selected, onSelect }) {
  return (
    <TouchableOpacity
      onPress={() => onSelect(id)}
      style={[
        styles.item,
        { backgroundColor: selected ? '#6e3b6e' : '#f9c2ff' },
      ]}
    >
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}

export default function App(props) {
  // console.log(props.state[0])
  const selected = props.state[0]
  const setSelected = props.state[1]
  // const [selected, setSelected] = React.useState(new Map());
  // const [state, setState] = React.useContext(StorageContext);

  const onSelect = React.useCallback(
    id => {
      const results = []
      const newSelected = new Map(selected);
      newSelected.set(id, !selected.get(id));
  
      
      setSelected(newSelected);
    },
    [selected],
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        horizontal={false}
        numColumns={3}
        data={DATA}
        renderItem={({ item }) => (
          <Item
            id={item.id}
            title={item.title}
            selected={!!selected.get(item.id)}
            onSelect={onSelect}
          />
        )}
        keyExtractor={item => item.id}
        extraData={selected}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 5,
    marginVertical: 2,
    marginHorizontal: 8,
  },
  title: {
    fontSize: 12,
  },
});



























































// import React from 'react'
// import { View, Text, FlatList  } from 'react-native'
// import { Icon, Checkbox } from 'galio-framework'


// const ProfileIntolerances = (props) => {

//   const data = [
//     {
//       id:1,
//       title:1
//     }, {
//       id:2,
//       title:2
//     }, {
//       id:3,
//       title:3
//     },
    
//   ]
//   function Item({variable}) {
//     return (
//     <View>
//       <View>
//         <Checkbox />
//         <Checkbox />
//         <Checkbox />
//         <Checkbox />
//       </View>
//          <View>
//          <Checkbox />
//          <Checkbox />
//          <Checkbox />
//          <Checkbox />
//        </View>
//        </View>
//     )
//   }





//   return (


//       <View>
//         <FlatList horizontal={false}
//           numColumns={3}
//           data={data}
//           renderItem={({item}) => <Item />}
//         />
//       </View>

//   )}


// export default ProfileIntolerances