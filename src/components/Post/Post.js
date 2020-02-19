import React from 'react';
import { Text } from 'react-native';

export default function Post({ item }) {
  return <Text>{item.post}</Text>;
}
