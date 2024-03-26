import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Text } from 'react-native';
import MorseCodeConverter from './components/MorseCodeConverter';
// import FlashlightButton from './components/FlashlightButton';

export default function App() {
  const [sentence, setSentence] = useState('');

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter your sentence"
        value={sentence}
        onChangeText={(text) => setSentence(text)}
      />
      <MorseCodeConverter sentence={sentence} />
      {/* <FlashlightButton sentence={sentence} /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 20,
    width: '80%',
  },
});
