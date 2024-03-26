import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { toMorseCode } from '../utils/MorseCode';

const MorseCodeConverter = ({ sentence }) => {
  const morseCode = toMorseCode(sentence);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Morse Code:</Text>
      <Text style={styles.morseCode}>{morseCode}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  morseCode: {
    fontSize: 16,
  },
});

export default MorseCodeConverter;
