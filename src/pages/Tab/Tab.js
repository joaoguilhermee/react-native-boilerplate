import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { Container, AddNew, IconPlus } from './styles';

import PostList from '~/components/PostList';
// import PostAdd from '~/components/PostAdd';
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

  return (
    <Container>
      <AddNew onPress={() => navigation.navigate('Add')}>
        <IconPlus />
      </AddNew>
      <PostList loadMore={loadMore} posts={posts} />
    </Container>
  );
}
