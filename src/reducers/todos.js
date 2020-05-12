import { action, currentDate } from './helper';
import { setData, getData } from '../localStorage/index';

const GET = 'todos/GET';
const PRESS = 'todo/PRESS';
export const getTodo = action(GET);
export const pressTodo = action(PRESS);

export const getTodoThunk = () => {
  return async function(dispatch) {
    try {
      const todos = await getData(currentDate());
      if (todos) {
        dispatch(getTodo(JSON.parse(todos)));
      }
    } catch (e) {

    }
  }
}

export const postTodoThunk = (todo) => {
  return async function (dispatch, getState) {
    try {
      const todoWithId = {...todo, id: `${getState().todos.length + 1}_${currentDate()}`}
      await setData(currentDate(), JSON.stringify([...getState().todos.todoList, todoWithId]));
      dispatch(getTodoThunk());
    } catch (e) {
      console.log(e)
    }
  }
}

export const putTodoThunk = (todo) => {
  return async function (dispatch, getState) {
    try {
      const newList = [...getState().todos.todoList.filter(v => v.id !== todo.id), todo]
      await setData(currentDate(), JSON.stringify(newList));
      dispatch(getTodoThunk());
    } catch (e) {
      console.log(e)
    }
  }
}

const initialState = {
  todoList: [],
  pressed: null,
  length: 0
}

const reducer = (state=initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET:
      return {
        ...state, 
        todoList: payload.filter(v => v.activate),
        length: payload.length,
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