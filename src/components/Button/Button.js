import React from 'react';

import { Container, Text } from './styles';

export default function Button({ children, ...props }) {
  return (
    <Container {...props}>
      <Text>{children}</Text>
    </Container>
  );
}
