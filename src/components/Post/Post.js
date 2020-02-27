import React from 'react';

import { Container, Text } from './styles';
export default function Post({ item }) {
  return (
    <Container>
      <Text>{item.post}</Text>
    </Container>
  );
}
