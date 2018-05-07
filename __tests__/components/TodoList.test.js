import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';

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

  it('render as expected', () => {
    const wrapper = shallow(
      <TodoList />,
      { context: { store } }
    );

    expect(wrapper.prop('todos')).toEqual(initialState.todos);
  });
});
