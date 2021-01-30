export function reducer(state = {}, action) {
  switch (action.type) {
    case "create":
      return {
        ...state,
        idx: state.idx + 1,
        todos: [...state.todos, { id: state.idx++, value: action.value }],
      };
    case "remove":
      return {
        ...state,
        todos: [...state.todos.filter((todo) => todo.id !== action.id)],
      };
  }
  return state;
}
