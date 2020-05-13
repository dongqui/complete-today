import { action, currentDate } from './helper';
import { insertTodo, updateTodo, selectTodo } from '../localStorage/index';

const GET = 'todos/GET';
const POST = 'todos/POST';
const PUT = 'todos/PUT';
const PRESS = 'todo/PRESS';
export const getTodo = action(GET);
export const postTodo = action(POST);
export const putTodo = action(PUT);
export const pressTodo = action(PRESS);

export const getTodoThunk = () => {
  return async function(dispatch) {
    try {
      const todos = await selectTodo(currentDate());
      if (todos) {
        dispatch(getTodo(JSON.parse(todos)));
      }
    } catch (e) {

    }
  }
}

export const postTodoThunk = (todo) => {
  return async function (dispatch) {
    try {
      const todos = await insertTodo(currentDate(), todo);
      if (todos) {
        dispatch(postTodo(JSON.parse(todos)));
      }
    } catch (e) {
      console.log(e)
    }
  }
}

export const putTodoThunk = (todo) => {
  return async function (dispatch) {
    try {
      const todos = await updateTodo(currentDate(), todo);
      if (todos) {
        dispatch(putTodo(JSON.parse(todos)));
      }
    } catch (e) {
      console.log(e)
    }
  }
}

const initialState = {
  todoList: [],
  pressed: null,
}

// todoObject = {
//   id,
//   status: 'done' | 'todo',
//   activate: true | false,
//   content,
// }

const reducer = (state=initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET:
    case POST:
    case PUT:
      return {
        ...state, 
        todoList: payload.filter(v => v.activate),
        pressed: null,
      }
    case PRESS:
      return {
        ...state,
        pressed: payload
      }
  }
  return state;
}

export default reducer;