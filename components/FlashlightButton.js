import React from 'react';
import { TouchableOpacity, Text, Alert } from 'react-native';
import { useFlashlight } from 'expo-flashlight';

const FlashlightButton = ({ sentence }) => {
  const { available, enabled, toggleFlashlight } = useFlashlight();

  const handlePress = () => {
    if (!available) {
      Alert.alert('Flashlight not available on this device');
      return;
    }

    // Convert sentence to morse code and execute using flashlight
    // This part needs implementation based on the library you use for controlling the flashlight
    const morseCode = convertToMorse(sentence);
    executeMorseCode(morseCode);
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <Text>Engage Flashlight</Text>
    </TouchableOpacity>
  );
};

export default FlashlightButton;
