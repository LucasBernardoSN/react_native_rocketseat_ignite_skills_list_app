import React from 'react';
import {StyleSheet, TextInput} from 'react-native';
import {slateDark} from '../styles/theme';

interface IInputProps {
  onChangeText: (text: string) => void;
  value: string;
  placeholder: string;
}

export function Input({...rest}: IInputProps) {
  return (
    <TextInput
      placeholderTextColor={slateDark.slate11}
      style={styles.input}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: slateDark.slate3,
    color: slateDark.slate12,
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginTop: 24,
    fontSize: 16,
  },
});
