import React from 'react';
import PostAdd from '~/components/PostAdd';
import BackButton from '~/components/BackButton';

import { Container } from './styles';

export default function Add({ navigation }) {
  navigation.setOptions({
    title: 'Add your post',
    headerLeft: () => <BackButton navigation={navigation} />,
  });
  return (
    <Container>
      <PostAdd />
    </Container>
  );
}
