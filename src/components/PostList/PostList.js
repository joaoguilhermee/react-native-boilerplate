import React from 'react';
import { View, FlatList } from 'react-native';

import Post from '~/components/Post';

export default function PostList({ posts }) {
  return (
    <View style={{ paddingTop: 100 }}>
      <FlatList
        data={posts}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => <Post item={item} />}
      />
    </View>
  );
}
