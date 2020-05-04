import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux'

import { Platform, StatusBar, StyleSheet, View } from 'react-native';

import TodoList from './components/TodoList/TodoList';

import { initTodoThunk } from './reducers/todos'

export default function Main(props) {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initTodoThunk());
  }, [dispatch]);

  return (
      <View style={styles.container}>
        {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
        <TodoList />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
