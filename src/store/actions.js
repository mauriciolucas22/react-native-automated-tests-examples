export function addTodo() {
  return {
    type: 'ADD_TODO',
    playload: {
      text: 'new TODO'
    }
  }
}