import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, Text } from 'react-native';
import PostList from '~/components/PostList';
import PostAdd from '~/components/PostAdd';
import { getPostsRequest } from '~/store/modules/posts/actions';

export default function Main() {
  const dispatch = useDispatch();
  const posts = useSelector(state => state.posts.list);

  useEffect(() => {
    dispatch(getPostsRequest());
  }, []);
  return (
    <View>
      <Text>Main</Text>
      <PostList posts={posts} />
      <PostAdd />
    </View>
  );
}
