export function addTodo(text) {
  return {
    type: 'ADD_TODO',
    playload: {
      text,
    }
  }
}

export function removeTodo(id) {
  return {
    type: 'REMOVE_TODO',
    playload: {
      id,
    }
  }
}

export function completeTodo(id) {
  return {
    type: 'COMPLETE_TODO',
    playload: {
      id,
    }
  }
}