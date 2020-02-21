import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, Text } from 'react-native';
import PostList from '~/components/PostList';
import { getPostsRequest } from '~/store/modules/posts/actions';

export default function Upvotes() {
  const dispatch = useDispatch();
  const posts = useSelector(state => state.posts.list);

  useEffect(() => {
    dispatch(getPostsRequest());
  }, []);
  return (
    <View>
      <Text>Upvotes</Text>
      <PostList posts={posts} />
    </View>
  );
}
