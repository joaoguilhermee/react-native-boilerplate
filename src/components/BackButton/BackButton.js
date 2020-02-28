import React from 'react';

import { Container, IconClose } from './styles';

export default function BackButton({ navigation }) {
  return (
    <Container onPress={() => navigation.goBack()}>
      <IconClose />
    </Container>
  );
}
