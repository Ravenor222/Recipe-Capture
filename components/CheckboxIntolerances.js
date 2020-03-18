import React, {useCallback, useContext} from 'react';

import {
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Text,
} from 'react-native';
import Constants from 'expo-constants';
import { StorageContext } from '../contexts/storageContext';


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
    id: 'Gluten-f',
    title: 'Gluten-f',
  },
  {
    id: 'Gluten-fre',
    title: 'Gluten-fre',
  },
  {
    id: 'Gluten-fr',
    title: 'Gluten-fr',
  },
  
];

const obj = {

}


function Item({ id, title, selected, onSelect }) {
  return (
    <TouchableOpacity
      onPress={() => onSelect(id)}
      style={[
        styles.item,
        { backgroundColor: selected ? '#ff7c67' : '#ffa07a' },
      ]}
    >
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}

export default function App(props) {
  const selected = props.state[0]
  const setSelected = props.state[1]
  const [state, setState] = useContext(StorageContext);

  const onSelect = useCallback(

    id => {
      
      const newSelected = new Map(selected);
      newSelected.set(id, !selected.get(id));
      setSelected(newSelected);

      for (let key of selected.keys()) {
        obj[key] = selected.get(key);
      };
      const filtered = Object.entries(obj).filter((x) => x[1]);
      const results = (filtered.map(x=> (x[0])));
      setState(state => ({...state, intolerances:results}));
     
    },
    [selected],
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        horizontal={false}
        style={{alignSelf:'center', flexGrow:0}}

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
    marginVertical: 4,
    marginHorizontal: 5,
    borderRadius:5,
    paddingVertical:10,
    width:'30%',
    textAlign:'center',

    
  },
  title: {
    fontSize: 12,
  },
  intolerance:{
    color:'red'
  }
});
