import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Camera } from 'expo-camera';
import { toMorseCode } from '@/utils/MorseCode';

function MorseFlash({ sentence }) {
  const [torchOn, setTorchOn] = useState(false);
  const [flashing, setFlashing] = useState(false);
  const morseCode = toMorseCode(sentence);

  useEffect(() => {
    // Trigger flashing sequence when component mounts
    if (torchOn && !flashing) {
      flashMorseCode();
    }
  }, [torchOn, flashing]);

  const flashMorseCode = async () => {
    if (!torchOn || flashing) {
      return;
    }

    setFlashing(true);

    const morseCodeArray = morseCode.split('');

    for (let index = 0; index < morseCodeArray.length; index++) {
      const code = morseCodeArray[index];
      let duration;

      if (code === '.') {
        duration = 500; // Dot duration
      } else if (code === '-') {
        duration = 1500; // Dash duration
      } else if (code === ' ') {
        duration = 0; // Space duration
      }

      if (duration > 0) {
        setTorchOn(true);
        await new Promise(resolve => setTimeout(() => {
          setTorchOn(false);
          resolve();
        }, duration));
      }

      // Add a small delay between each Morse code character
      if (index < morseCodeArray.length - 1) {
        await new Promise(resolve => setTimeout(resolve, 500));
      }
    }

    setFlashing(false); // Set flashing to false after the entire sequence is flashed
  };



  const handlePress = () => {
    if (flashing) {
      setFlashing(false);
      setTorchOn(false); // Turn off torch if flashing is stopped
    } else {
      setTorchOn(true); // Turn on torch if not already on
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.text}>{flashing ? 'Stop' : 'Light'}</Text>
      </TouchableOpacity>
      {flashing && (
        <Camera
          style={styles.camera}
          flashMode={torchOn ? 'torch' : 'off'}
          type={Camera.Constants.Type.back}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
  },
  text: {
    color: '#fff',
    fontSize: 18,
  },
  camera: {
    width: 100,
    height: 100,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    opacity: 0, // make the camera transparent
    zIndex: 999,
  },
});

export default MorseFlash;
