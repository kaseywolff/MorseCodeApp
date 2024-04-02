import React, { useState } from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import MorseText from './components/MorseText';
import MorseFlash from './components/MorseFlash';

const App: React.FC = () => {
  const [sentence, setSentence] = useState<string>('');
  const [isInputSelected, setIsInputSelected] = useState(false);

  const handleInputFocus = () => {
    setIsInputSelected(true);
  };

  const handleInputBlur = () => {
    setIsInputSelected(false);
  };

  return (
    <View style={[styles.container, isInputSelected && styles.containerSelected]}>
      <TextInput
        style={styles.input}
        placeholder="Enter your sentence"
        value={sentence}
        onChangeText={(text) => setSentence(text)}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
      />
      <MorseText sentence={sentence} />
      <MorseFlash sentence={sentence} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  containerSelected: {
    justifyContent: 'flex-start',
    paddingTop: '20%',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 20,
    width: '80%',
  },
});

export default App;