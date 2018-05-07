import React from 'react';
import { View, Text, ScrollView } from 'react-native';

import Post from './Post';

export default class List extends React.Component {
  state = {
    posts: [],
  };

  renderPosts = () => (
    <ScrollView>
      { this.state.posts.map(post => <Post key={post.id} post={post}/>) }
    </ScrollView>
  );

  render() {
    return(
      <View>
        { this.state.posts.length > 0
          ? this.renderPosts()
          : <Text>Nenhum post!</Text>
        }
      </View>
    );
  }
}
