import React,{ userState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { TextInput } from 'react-native-web';

const App = () => {
  const [inputValues, setInputValues] = useState({
    input1:'',
  });

  const [sum, setSum] = useState(0)

  const handleInputChange = (inputName, value) => {
    setInputValues({...inputValues, [inputName]: value
    });
  };
  const handleSum = () => {
    const { input1 } = inputValues;
    const result = parseInt(input1);
    setSum(result);  
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Input1:</Text>
      <TextInput
      style={styles.input}
      onChangeText={(value) => handleInputChange('input1', value)}
      value={inputValues.input1}
      keyboardType="numeric"
      />


      <Button title="somar" onPress={handleSum}/>
      <Text style={styles.result}>Resultado:</Text>
      
      
    </View>
  
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    
  },
});
