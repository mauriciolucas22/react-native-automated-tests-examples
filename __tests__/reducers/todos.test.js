import todoReducer from '../../src/store/reducers';
import * as actions from '../../src/store/actions';

const todos = [
  { id: 1, text: 'Jesus Cristo' },
  { id: 2, text: 'Deus', completed: true },
];

describe('Testing todo reducer', () => {
  it('can add new todo', () => {
    const text = 'Jesus';
    const state = todoReducer([], actions.addTodo(text));

    expect(state).toHaveLength(1);
    expect(state[0].text).toBe(text);
  });
  
  it('can remove todo', () => {
    const state = todoReducer(todos, actions.removeTodo(1));

    expect(state).toHaveLength(1);
    expect(state).not.toContainEqual(todos[0]);
  });

  it('can mark as complete todo', () => {
    let state = todoReducer(todos, actions.completeTodo(1));

    expect(state[0].completed).toBe(true);

    state = todoReducer(state, actions.completeTodo(1));

    expect(state[0].completed).toBe(false);
  });
});