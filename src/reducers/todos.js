import { action, currentDate } from './helper';
import { setData, getData } from '../localStorage/index';

const INIT = 'todos/INIT';
const ADD = 'todos/ADD';
const DELETE = 'todos/DELETE';
const DONE = 'todos/DONE';

export const initTOdo = action(INIT);
export const addTodo = action(ADD);
export const deleteTodo = action(DELETE);
export const doneTodo = action(DONE);

export const addTodoThunk = (todo) => {
  return async function (dispatch, getState) {
    try {
      const todoWithId = {...todo, id: getState.todos.length}
      await setData(currentDate(), JSON.stringify([...getState.todos.todoList, todo]));
      dispatch(addTodo(todo));
    } catch (e) {
      
    }
  }
}

export const initTodoThunk = () => {
  return async function(dispatch) {
    try {
      const todos = await getData(currentDate());
      dispatch(JSON.stringify(initTodo(todo)));
    } catch (e) {

    }
  }
}

const initialState = {
  todoList: [],
  doneList: [],
  length: 0
}

const reducer = (state=initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case INIT:
      return {
        ...state, 
        todoList: payload.filter(v => v.activate && v.status === 'todo'),
        doneList: payload.filter(v => v.activate && v.status === 'done'),
        length: payload.length - 1
      }
    case ADD: 
      return { 
      ...state, 
      todoList: [...state.todoList, payload],
      legnth: state.length + 1
    }
    case DELETE:
      return {
        ...state, 
        todoList: [...state.todoList.fillter(v => v.id !== payload.id), payload]
        }
    case DONE:
      return {
        ...state, 
        todoList: state.todoList.filter(v => v.id !== payload.id), 
        doneList: [...state.doneList, payload]}

  }
  return state;
}

export default reducer;