import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Text, View, TouchableOpacity } from 'react-native';

import styles from './TodoStyles';

import { putTodoThunk, pressTodo } from '../../reducers/todos';

export default function TodoItem({ todo }) {
  
  const dispatch = useDispatch();
  const pressed = useSelector(state => state.todos.pressed, []);

  const onPressDone = () => {
    dispatch(putTodoThunk({...todo, status: 'done'}))
  }
  const onPressDelete = () => {
    dispatch(putTodoThunk({...todo, activate: false}))
  }

  const press = () => {
    if (todo.id === pressed) {
      dispatch(pressTodo(null))
    } else {
      dispatch(pressTodo(todo.id))
    }
  }

  return (
    <TouchableOpacity onPress={press}>
      <View style={styles.itemContainer}>
        <Text style={styles.todoItem}>{todo.content}</Text>
      </View>

      {pressed === todo.id && 
      <View style={styles.optionList}>
        <Text onPress={onPressDone} style={styles.optionItem}>완료</Text>
        <Text style={styles.optionItem}>수정</Text>
        <Text onPress={onPressDelete} style={styles.optionItem}>삭제</Text>
     </View>}
    </TouchableOpacity>
    
  )
}