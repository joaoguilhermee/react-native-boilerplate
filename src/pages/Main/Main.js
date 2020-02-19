import React from 'react';
import { View, Text } from 'react-native';
import PostList from '~/components/PostList';
import PostAdd from '~/components/PostAdd';
// import { Container } from './styles';

export default function Main() {
  return (
    <View>
      <Text>Main</Text>
      <PostList />
      <PostAdd />
    </View>
  );
}
