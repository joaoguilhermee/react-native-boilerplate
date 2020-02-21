import React from 'react';
import 'react-native';
import { render } from '@testing-library/react-native';
import PostList from '~/components/PostList';
import server from '~/../db.json';

jest.mock('react-redux');

describe('PostList Components', () => {
  it('should render posts list', () => {
    const { getByText } = render(<PostList posts={server.posts} />);
    expect(getByText('Post One')).toBeTruthy();
    expect(getByText('test api')).toBeTruthy();
  });
});
