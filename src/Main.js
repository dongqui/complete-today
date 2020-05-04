import React, { useEffect } from 'react';
import { Provider, useDispatch } from 'react-redux'
import { createStore } from 'redux';
import reducer from './reducers/index';

import { Platform, StatusBar, StyleSheet, View } from 'react-native';

import TodoList from './components/TodoList/TodoList';

import { initTodoThunk } from './reducers/todos'

const store = createStore(reducer);

export default function Main(props) {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initTodoThunk());
  }, [dispatch]);

  return (
    <Provider store={store}>
      <View style={styles.container}>
        {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
        <TodoList />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
