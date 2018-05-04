import React from 'react';
import { View, Text } from 'react-native';

import Post from './Post';

const posts = [
  { id: 1, title: 'Test', description: 'desc' },
  { id: 2, title: 'Test', description: 'desc' },
  { id: 3, title: 'Test', description: 'desc' },
];

const List = ({ posts }) => (
  <View>
    { posts.length > 0
      ? posts.map(post => <Post key={post.id} post={post}/>)
      : <Text>Nenhum post!</Text>
    }
  </View>
);

export default List;
