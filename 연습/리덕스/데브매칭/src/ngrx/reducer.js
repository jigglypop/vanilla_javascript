export function reducer(state = {}, action) {
  switch (action.type) {
    case "plus":
      return {
        ...state,
        age: state.age ? state.age + 1 : 10,
      };
    case "minus":
      return {
        ...state,
        age: state.age ? state.age - 1 : 10,
      };
  }
  return state;
}
