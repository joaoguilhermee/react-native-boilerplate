import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  FlatList,
} from 'react-native';

// import { Container } from './styles';

export default function TechList() {
  const posts = [{ id: 1, post: 'Post One' }, { id: 2, post: 'Second post' }];

  const [newTech, setNewTech] = useState('');

  function handleAdd() {
    setTechs([...techs, newTech]);
    setNewTech('');
  }

  return (
    <View>
      <FlatList
        data={posts}
        keyExtractor={post => post}
        renderItem={({ post }) => <Text>teste</Text>}
      />

      <TextInput
        testID="tech-input"
        value={newTech}
        onChangeText={setNewTech}
      />

      <TouchableOpacity onPress={handleAdd}>
        <Text>Adicionar</Text>
      </TouchableOpacity>
    </View>
  );
}
