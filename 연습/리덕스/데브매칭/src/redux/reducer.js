export function reducer(state = {}, action) {
  if (action.type === "next") {
    return {
      ...state,
      age: state.age ? state.age + 1 : 10,
    };
  }
  return state;
}
