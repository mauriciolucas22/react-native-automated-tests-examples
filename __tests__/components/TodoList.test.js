import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';

import * as actions from '../../src/store/actions';

import { Text, Button } from 'react-native';
import TodoList from '../../src/TodoList';

const mockStore = configureStore([]);

const initialState = {
  todos: [
    { id: 1, text: 'Jesus' },
    { id: 2, text: 'Deus' },
  ],
};

describe('Testing TodoList', () => {

  const store = mockStore(initialState);

  function createWrapper() {
    return shallow(
      <TodoList />,
      { context: { store } }
    );
  }

  it('render as expected', () => {
    const wrapper = createWrapper();

    expect(wrapper.prop('todos')).toEqual(initialState.todos);
    expect(wrapper.dive().find(Text)).toHaveLength(initialState.todos.length);
  });

  it('can add new todo', () => {
    const wrapper = createWrapper();

    wrapper.dive().find(Button).simulate('press');

    expect(store.getActions()).toContainEqual(actions.addTodo());
  });
});
