import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import 'react-native';
import { render } from '@testing-library/react-native';

import Main from '~/pages/Main';
import server from '~/../db.json';
import { getPostsRequest } from '~/store/modules/posts/actions';

jest.mock('react-native-vector-icons/MaterialCommunityIcons', () => {
  return {
    createIconSet: jest.fn(),
    Icon: jest.fn(),
  };
});
jest.mock('react-redux');

describe('PostList Components', () => {
  it('should get posts from redux', () => {
    const dispatch = jest.fn();
    useDispatch.mockReturnValue(dispatch);

    render(<Main />);
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
    const { getByText } = render(<Main posts={server.posts} />);
    expect(getByText('Post One')).toBeTruthy();
    expect(getByText('test api')).toBeTruthy();
  });
});
