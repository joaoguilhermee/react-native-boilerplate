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
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => <Post item={item} />}
      />
    </View>
  );
}
