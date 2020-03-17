import React, {createContext, useState} from 'react';

const StorageContext = createContext([{}, () => {}]);

const  StorageContextProvider = (props) => {

  const [state, setState] = useState({
    name:"nick",
    diet:null,
    intolerances:null, // -> maybe null
    pantry: false,
    allergies:"",
    
});

  return (
    <StorageContext.Provider 
    value={[state, setState]}
    >
    {props.children}
    </StorageContext.Provider>
  )
}


export {StorageContext, StorageContextProvider};