import { AsyncStorage } from 'react-native';

export const insertTodo = async (key, value) => {
  try {
    let lastId = await AsyncStorage.getItem('lastId');
    lastId = lastId !== null ? +(lastId) + 1 : '0';
    value['id'] = lastId;
    const todosStr = await AsyncStorage.getItem(key);
    const todos = todosStr !== null ? [...JSON.parse(todosStr), value] : [value];
    await AsyncStorage.multiSet([[key, JSON.stringify(todos)], ['lastId', lastId + '']]);
    return await AsyncStorage.getItem(key);
  } catch (e) {
    return e;
  }
}

export const updateTodo = async (key, value) => {
  try {
    const todosStr = await AsyncStorage.getItem(key);
    const todos = [...JSON.parse(todosStr).filter(v => v.id !== value.id), value]
    await AsyncStorage.setItem(key, JSON.stringify(todos));
    return await AsyncStorage.getItem(key);
  } catch (e) {
    return e;
  }
}

export const selectTodo = async (key) => {
  try {
    return await AsyncStorage.getItem(key);
  } catch(e) {
    return e;
  }
}

export const clearData = async (key) => {
  try {
    await AsyncStorage.clear();
  } catch(e) {
    return e;
  }
}