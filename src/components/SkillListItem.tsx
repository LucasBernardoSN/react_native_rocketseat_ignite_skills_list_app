import React from 'react';
import {Alert, StyleSheet, Text, TouchableHighlight} from 'react-native';
import {cyanDark, slateDark} from '../styles/theme';

interface ISkillListItemProps {
  name: string;
  id: string;
  deleteSkill: (id: string) => void;
}

export function SkillListItem({name, id, deleteSkill}: ISkillListItemProps) {
  function handleDelete() {
    Alert.alert('Delete skill', 'Are you sure you want to delete this skill?', [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {text: 'OK', onPress: () => deleteSkill(id)},
    ]);
  }

  return (
    <TouchableHighlight
      underlayColor={cyanDark.cyan6}
      onLongPress={handleDelete}
      style={styles.itemListContainer}>
      <Text style={styles.text}>{name}</Text>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  text: {
    color: slateDark.slate12,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingHorizontal: 2,
    paddingVertical: 2,
  },
  itemListContainer: {
    backgroundColor: slateDark.slate3,
    borderRadius: 16,
    marginVertical: 8,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
});
