import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import 'react-native';
import { render, fireEvent } from '@testing-library/react-native';
import PostAdd from '~/components/PostAdd';
import { addPostsRequest } from '~/store/modules/posts/actions';

jest.mock('react-redux');
jest.mock('@react-navigation/native');

describe('PostAdd Components', () => {
  it('should be able to add new post', () => {
    const { getByTestId, getByText } = render(<PostAdd />);

    const dispatch = jest.fn();
    useDispatch.mockReturnValue(dispatch);
    const navigation = jest.fn();
    useNavigation.mockReturnValue({ goBack: navigation });

    fireEvent.changeText(getByTestId('post-input'), 'New Post content');
    fireEvent.changeText(getByTestId('post-input-title'), 'New Title');
    fireEvent.press(getByText('Add'));

    expect(dispatch).toHaveBeenCalledWith(
      addPostsRequest({
        content: 'New Post content',
        title: 'New Title',
      })
    );
  });
});
