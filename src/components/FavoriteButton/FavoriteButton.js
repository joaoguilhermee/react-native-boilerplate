import React from 'react';
import { useDispatch } from 'react-redux';
import { tooglePostsVote } from '~/store/modules/posts/actions';

import { Container, IconFavorite } from './styles';

export default function FavoriteButton({ active, id }) {
  const dispatch = useDispatch();
  function handleFavorite() {
    dispatch(tooglePostsVote(id));
  }
  return (
    <Container onPress={() => handleFavorite()}>
      <IconFavorite active={active} />
    </Container>
  );
}
