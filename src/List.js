import React from 'react';
import { View, Text } from 'react-native';

import Post from './Post';

const List = ({ posts }) => {
  <View>
    { posts.length > 0
      ? posts.map(post => <Post key={post.id} post/>)
      : <Text>Nenhum post!</Text>}
  </View>
};

export default List;
