import React, {useState} from 'react';
import {
  Alert,
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
} from 'react-native';
import {Button} from '../components/Button';
import {Input} from '../components/Input';
import {SkillListItem} from '../components/SkillListItem';
import {cyanDark, slateDark} from '../styles/theme';

type SkillProps = {
  name: string;
  id: string;
};

const MY_SKILLS = [
  {
    id: '0',
    name: 'JavaScript',
  },
  {
    id: '1',
    name: 'TypeScript',
  },
  {
    id: '2',
    name: 'React',
  },
  {
    id: '3',
    name: 'React Native',
  },
];

export const Home = () => {
  const [skillList, setSkillList] = useState<SkillProps[]>(MY_SKILLS);
  const [newSkill, setNewSkill] = useState('');

  function handleAddNewSkill() {
    if (newSkill !== '') {
      setSkillList(oldState => [
        ...oldState,
        {name: newSkill, id: String(Math.random())},
      ]);
      setNewSkill('');
    } else {
      Alert.alert('Ops...', "You can't add an empty skill!");
    }
  }

  function deleteSkill(id: string) {
    setSkillList(oldState => oldState.filter(skill => skill.id !== id));
  }

  return (
    <>
      <StatusBar backgroundColor={slateDark.slate1} />
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Welcome, Lucas Bernardo</Text>

        <Input
          onChangeText={setNewSkill}
          value={newSkill}
          placeholder="New skill"
        />

        <Button onPress={handleAddNewSkill} />

        <Text style={[styles.title, {marginTop: 24}]}>My skills</Text>

        {skillList.length > 0 ? (
          <FlatList
            style={styles.list}
            data={skillList}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <SkillListItem deleteSkill={deleteSkill} {...item} />
            )}
          />
        ) : (
          <>
            <Text
              style={[
                styles.title,
                {
                  textAlign: 'center',
                  marginVertical: 32,
                  color: cyanDark.cyan12,
                },
              ]}>
              You don't have any skills yet...
            </Text>
            <Text
              style={[
                styles.title,
                {textAlign: 'center', marginVertical: -12, fontSize: 32},
              ]}>
              😥
            </Text>
          </>
        )}
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: slateDark.slate1,
    flex: 1,
    paddingHorizontal: 32,
    paddingVertical: 32,
  },
  title: {
    color: slateDark.slate12,
    fontSize: 24,
    fontWeight: 'bold',
  },
  list: {
    marginTop: 24,
  },
});
