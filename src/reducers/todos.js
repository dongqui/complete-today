import { action } from './helper';

const ADD = 'todos/ADD';
const DELETE = 'todos/DELETE';
const DONE = 'todos/DONE';

export const addTodo = action(ADD);
export const deleteTodo = action(DELETE);
export const doneTodo = action(DONE);

const initialState = {
  todoList: [],
  doneList: []
}

const reducer = (state=initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD: 
      return { ...state, todoList: [...state.todoList, payload] }
    case DELETE:
      return {...state, todoList: state.todoList.filter(v => v !== payload)}
    case DONE:
      return {...state, todoList: state.todoList.filter(v => v !== payload), doneList: [...state.doneList, payload]}

  }
  return state;
}

export default reducer;