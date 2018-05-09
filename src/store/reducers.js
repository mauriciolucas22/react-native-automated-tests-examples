export default function todos(state = [], action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [ ...state, { id: Math.random(), text: action.playload.text } ];

    case 'REMOVE_TODO':
      return state.filter(todo => todo.id !== action.playload.id);

    case 'COMPLETE_TODO':
      return state.map(todo =>
        (todo.id === action.playload.id)
          ? { ...todo, completed: !todo.completed }
          : todo
      );

    default:
      return state;
  }
}