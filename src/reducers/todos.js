import { action } from './helper';

const ADD = 'todos/ADD';
const DELETE = 'todos/DELETE';
const DONE = 'todos/DONE';

export const addTodo = action(ADD);
export const deleteTodo = action(DELETE);
export const doneTodo = action(DONE);

const initialState = {
  todos: [],
  dones: []
}

const reducer = (state=initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD: 
      return { ...state, todos: [...state.todos, payload] }
    case DELETE:
      return {...state, todos: state.todos.filter(v => v !== payload)}
    case DONE:
      return {...state, todos: state.todos.filter(v => v !== payload), dones: [...state.dones, payload]}

  }
  return state;
}

export default reducer;