import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux'

import { Platform, StatusBar, StyleSheet, View } from 'react-native';

import TodoList from './components/TodoList/TodoList';

import { getTodoThunk } from './reducers/todos'

export default function Main(props) {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodoThunk());
  }, [dispatch]);

  return (
      <View style={styles.container}>
        <StatusBar/>
        <TodoList />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
