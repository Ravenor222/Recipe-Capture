import React, {useContext} from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import { preventAutoHide } from 'expo/build/launch/SplashScreen';
import { IngredientsContext } from '../../contexts/IngredientsContext'

const styles = StyleSheet.create({
    container:{
      display:'flex',
      flexDirection:'row',
      width:'80%',
      marginHorizontal:'10%',
      borderColor:'black',
      borderWidth:1,
      // borderRadius:50
    
    },
    textInput:{
      backgroundColor:'white',
      width:'75%'
    },
    button: {
      backgroundColor:'lightsalmon',
      
      
    }
});


const ModalTextInput = (props) => {
  // const [ingredients, setIngredients] = useState(props.ingredients);
  const [ingredients, setIngredients] = useContext(IngredientsContext);


  const addIngredients = () => { 
    
  };
  //1- onPress={addIngredients}
  //2- onPress={()=>{setState}}

    return (
        <View style={styles.container}>
            <TextInput style={styles.textInput}/>
            <Button
            style={styles.button}
            onPress={()=>{
            setIngredients(prev => ([...prev, 'pizza']))
      
      
            }}
            >
              Submit
            </Button>
            
        </View>
    )
};

export default ModalTextInput