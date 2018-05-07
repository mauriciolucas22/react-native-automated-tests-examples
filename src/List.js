import React from 'react';
import { View, Text, ScrollView, Button, AsyncStorage } from 'react-native';

import Post from './Post';

export default class List extends React.Component {
  state = {
    posts: [],
  };

  renderPosts = () => (
    <ScrollView>
      { this.state.posts.map(post => <Post key={post.id} post={post} onDelete={this.deletePost}/>) }
    </ScrollView>
  );

  addPost = () => {
    this.setState({
      posts: [
        ...this.state.posts,
        { id: Math.random(), title: 'New Post', description: 'new Desc' },
      ],
    });
  };

  savePost = async () => {
    AsyncStorage.setItem('@TestRN:posts', JSON.stringify(this.state.posts));
  };

  deletePost = id => {
    this.setState({
      posts: this.state.posts.filter(post => post.id !== id),
    });
  };

  render() {
    return(
      <View>
        { this.state.posts.length > 0
          ? this.renderPosts()
          : <Text>Nenhum post!</Text>
        }

        <Button id="new" title="Add post" onPress={this.addPost}/>
        <Button id="save" title="Save post" onPress={this.savePost}/>
      </View>
    );
  }
}
