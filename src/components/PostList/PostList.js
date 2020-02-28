import React from 'react';
import { View, FlatList } from 'react-native';

import Post from '~/components/Post';

export default function PostList({ posts, loadMore }) {
  return (
    <View>
      <FlatList
        onEndReached={loadMore}
        onEndReachedThreshold={0.2}
        data={posts}
        keyExtractor={item => Math.random() * 1000}
        renderItem={({ item }) => <Post item={item} />}
      />
    </View>
  );
}
