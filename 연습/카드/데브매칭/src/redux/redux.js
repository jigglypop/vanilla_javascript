import { reducer } from "./reducer.js";

export function createStore() {
  let state = {
    age: 10,
  };
  const listeners = [];
  const dispatch = (action) => {
    state = reducer(state, action);
    listeners.forEach((f) => f());
  };
  const getState = () => ({ ...state });
  const subscribe = (f) => listeners.push(f);

  return {
    getState,
    dispatch,
    subscribe,
  };
}
