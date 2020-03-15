import React, {createContext, useState} from 'react';

const ProfileContext = createContext([{}, () => {}]);

const  ProfileContextProvider = (props) => {

  const [state, setState] = useState({
    name: "test",
    time: "test",
    cuisine: "test",
    number: 15

  });

  return (
    <ProfileContext.Provider 
    value={[state, setState]}
    >
    {props.children}
    </ProfileContext.Provider>
  )
}


export {ProfileContext, ProfileContextProvider};