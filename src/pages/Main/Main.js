import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Tab from '~/pages/Tab';
import { getPostsRequest } from '~/store/modules/posts/actions';

export default function Main() {
  const dispatch = useDispatch();
  const posts = useSelector(state => state.posts.list);

  useEffect(() => {
    dispatch(getPostsRequest());
  }, []);
  return <Tab posts={posts} />;
}
