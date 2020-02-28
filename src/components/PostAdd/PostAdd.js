import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { Container, Button, Input, Label } from './styles';
import { addPostsRequest } from '~/store/modules/posts/actions';

export default function PostAdd() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const handleAdd = () => {
    dispatch(addPostsRequest({ title, content }));
    setTitle('');
    setContent('');

    navigation.goBack();
  };
  return (
    <Container>
      <Label>Write your post</Label>
      <Input
        testID="post-input-title"
        value={title}
        placeholder="Title"
        onChangeText={setTitle}
      />
      <Input
        multiline
        testID="post-input"
        placeholder="Content"
        value={content}
        onChangeText={setContent}
      />
      <Button onPress={() => handleAdd()}>Add</Button>
    </Container>
  );
}
