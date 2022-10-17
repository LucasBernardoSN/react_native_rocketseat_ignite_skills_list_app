import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {cyanDark, slateDark} from '../styles/theme';

interface IButtonProps {
  onPress: () => void;
}

export function Button({onPress}: IButtonProps) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>Add New</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: cyanDark.cyan9,
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginTop: 24,
    alignItems: 'center',
  },
  buttonText: {
    color: slateDark.slate12,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
