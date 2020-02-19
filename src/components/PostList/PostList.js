import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  FlatList,
} from 'react-native';

import { getPostsRequest } from '~/store/modules/posts/actions';
// import { Container } from './styles';

export default function PostList() {
  const dispatch = useDispatch();
  const posts = useSelector(state => state.posts.list);
  const [post, setPost] = useState('');

  function handleAdd() {
    dispatch(getPostsRequest());
    setPost('');
  }

  useEffect(() => {
    dispatch(getPostsRequest());
  }, [dispatch]);

  return (
    <View style={{ paddingTop: 100 }}>
      <FlatList
        data={posts}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <Text>{item.post}</Text>}
      />
    </View>
  );
}
