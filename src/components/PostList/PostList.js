import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, Text, FlatList } from 'react-native';

import { getPostsRequest } from '~/store/modules/posts/actions';
import Post from '~/components/Post';
// import { Container } from './styles';

export default function PostList() {
  const dispatch = useDispatch();
  const posts = useSelector(state => state.posts.list);

  useEffect(() => {
    dispatch(getPostsRequest());
  }, []);

  return (
    <View style={{ paddingTop: 100 }}>
      <FlatList
        data={posts}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => <Post item={item} />}
      />
    </View>
  );
}
