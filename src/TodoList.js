import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

const TodoList = ({ todos }) => (
  <View>
    { todos.map(todo => <Text key={todo.id}>{todo.text}</Text>) }
  </View>
);

const mapStateToProps = state => ({
  todos: state.todos,
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
