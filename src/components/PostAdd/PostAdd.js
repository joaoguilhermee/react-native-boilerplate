import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { TextInput, TouchableOpacity, Text } from 'react-native';
import { addPostsRequest } from '~/store/modules/posts/actions';

// import { Container } from './styles';

export default function PostAdd() {
  const dispatch = useDispatch();
  const [post, setPost] = useState('');
  function handleAdd() {
    dispatch(addPostsRequest({ post }));
    setPost('');
  }
  return (
    <>
      <TextInput
        style={{ backgroundColor: 'red' }}
        testID="post-input"
        value={post}
        onChangeText={setPost}
      />

      <TouchableOpacity onPress={handleAdd}>
        <Text>Adicionar</Text>
      </TouchableOpacity>
    </>
  );
}
