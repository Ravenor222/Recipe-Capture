


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
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: '4',
    title: 'fourth Item',
  },
  {
    id: '5',
    title: 'fourth Item',
  },
  {
    id: '6',
    title: 'fourth Item',
  },
  {
    id: '7',
    title: 'fourth Item',
  },
  {
    id: '8',
    title: 'fourth Item',
  },
  {
    id: '9',
    title: 'fourth Item',
  },
  {
    id: '10',
    title: 'fourth Item',
  },
  {
    id: '11s',
    title: 'fourth Item',
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

export default function App() {
  const [selected, setSelected] = React.useState(new Map());

  const onSelect = React.useCallback(
    id => {
      const newSelected = new Map(selected);
      newSelected.set(id, !selected.get(id));
      console.log(selected);
      console.log(selected[0])
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