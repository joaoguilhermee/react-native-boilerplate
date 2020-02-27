import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Container } from './styles';
import PostList from '~/components/PostList';
import PostAdd from '~/components/PostAdd';
import { getPostsRequest } from '~/store/modules/posts/actions';

export default function Tab({ filters }) {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const posts = useSelector(state => state.posts.list);
  const finished = useSelector(state => state.posts.finished);
  const [page, setPage] = useState(1);

  function request() {
    dispatch(getPostsRequest(page, filters || 'all'));
  }
  function loadMore() {
    if (!finished) {
      setPage(page + 1);
      request();
    }
  }
  useEffect(() => {
    setPage(1);
    request();
  }, []);
  useEffect(() => {
    console.tron.log('POSTS', posts);
  }, [posts]);

  return (
    <Container>
      <Text>TAB</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Add')}>
        <Text>Add</Text>
      </TouchableOpacity>
      <PostList loadMore={loadMore} posts={posts} />
      {/* <PostAdd /> */}
    </Container>
  );
}
