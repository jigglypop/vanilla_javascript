import { reducer } from "./reducer.js";

export function createStore() {
  // initialize 함수 : 상태값 저장
  let state = {
    age: 10,
  };
  const listeners = [];
  // dispatch 함수 : action을 dispatch한 후 리스너에 등록
  const dispatch = (action) => {
    state = reducer(state, action);
    listeners.forEach((f) => f());
  };
  // state 함수 : 현자 state 값을 확인한다
  const getState = () => ({ ...state });
  // subscribe 함수 : 구독하자마자 함수를 한번 실행하고 리스너에 넣는다
  const subscribe = (f) => {
    f();
    listeners.push(f);
  };

  return {
    getState,
    dispatch,
    subscribe,
  };
}
