import React from 'react';
import { useDispatch } from 'react-redux';
import 'react-native';
import { render, fireEvent } from '@testing-library/react-native';
import PostAdd from '~/components/PostAdd';
import { addPostsRequest } from '~/store/modules/posts/actions';

jest.mock('react-redux');

describe('PostAdd Components', () => {
  it('should be able to add new post', () => {
    const { getByTestId, getByText } = render(<PostAdd />);

    const dispatch = jest.fn();
    useDispatch.mockReturnValue(dispatch);

    fireEvent.changeText(getByTestId('post-input'), 'Novo Post');
    fireEvent.press(getByText('Adicionar'));

    expect(dispatch).toHaveBeenCalledWith(
      addPostsRequest({ post: 'Novo Post' })
    );
  });
});
