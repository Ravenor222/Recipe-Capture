import React, {createContext, useState} from 'react';

const IngredientsContext = createContext([{}, () => {}]);

const  IngredientsContextProvider = (props) => {

  const [ingredients, setIngredients] = useState('');
  

  return (
    <IngredientsContext.Provider 
    value={[ingredients, setIngredients]}
    >
    {props.children}
    </IngredientsContext.Provider>
  )
}


export {IngredientsContext, IngredientsContextProvider};