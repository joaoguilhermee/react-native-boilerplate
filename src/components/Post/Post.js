import React from 'react';
import FavoriteButton from '~/components/FavoriteButton';
import { Container, Text, Header, Title } from './styles';

export default function Post({ item }) {
  return (
    <Container>
      <Header>
        <Title>{item.title}</Title>
        <FavoriteButton id={item.id} active={item.active} />
      </Header>
      <Text>{item.content}</Text>
    </Container>
  );
}
