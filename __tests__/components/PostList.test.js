import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import 'react-native';
import { render, fireEvent } from '@testing-library/react-native';
import PostList from '~/components/PostList';
import server from '~/../db.json';
import { getPostsRequest } from '~/store/modules/posts/actions';

jest.mock('react-redux');

describe('PostList Components', () => {
  it('should get posts from redux', () => {
    const dispatch = jest.fn();
    useDispatch.mockReturnValue(dispatch);

    render(<PostList />);
    expect(dispatch).toHaveBeenCalledWith(getPostsRequest());
  });

  it('should render posts list', () => {
    useSelector.mockImplementation(cb =>
      cb({
        posts: {
          list: server.posts,
        },
      })
    );
    const { getByText } = render(<PostList />);
    expect(getByText('Post One')).toBeTruthy();
    expect(getByText('test api')).toBeTruthy();
  });
});
