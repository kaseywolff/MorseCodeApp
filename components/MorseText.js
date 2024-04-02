import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { toMorseCode, getMorseCodeDetails } from '../utils/MorseCode';

const MorseCodeTextConverter = ({ sentence }) => {
  const morseCode = toMorseCode(sentence);
  const morseCodeDetails = getMorseCodeDetails(sentence);

  const [showDetails, setShowDetails] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Morse Code:</Text>
      <Text style={styles.morseCode}>{morseCode}</Text>
      {sentence.length > 0 && (
        <TouchableOpacity style={styles.button} onPress={() => setShowDetails(!showDetails)}>
          <Text style={styles.buttonText}>{showDetails ? 'Hide Details' : 'See Details'}</Text>
        </TouchableOpacity>
      )}
      {showDetails && morseCodeDetails.length > 0 && (
        <View style={styles.detailsContainer}>
          {morseCodeDetails.map((item, index) => (
            <View key={index} style={styles.detailItem}>
              <Text style={styles.detailText}>{item.character}: </Text>
              <Text style={styles.detailText}>{item.morseCode}</Text>
            </View>
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: 10,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  morseCode: {
    fontSize: 16,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  detailsContainer: {
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
  },
  detailItem: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  detailText: {
    fontSize: 16,
  },
});

export default MorseCodeTextConverter;
