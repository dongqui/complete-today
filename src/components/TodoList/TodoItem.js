import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Text, View, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

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

  const onPressEdit = () => {

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
        <AntDesign onPress={onPressDone} name="smileo" size={24} color="black" />
        <Text style={styles.todoItem}>{todo.content}</Text>
      </View>

      {pressed === todo.id && 
      <View style={styles.optionList}>
        <TouchableOpacity onPress={onPressDone} style={styles.optionItem}> 
          <Text style={styles.textAlignCenter}>완료</Text> 
        </TouchableOpacity>
        <TouchableOpacity  onPress={onPressEdit} 
          style={
            {...styles.optionItem, 
              borderLeftColor: '#bbb', 
              borderLeftWidth: 1,
              borderRightColor: '#bbb',
              borderRightWidth: 1,
            }}> 
          <Text style={styles.textAlignCenter}>수정</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onPressDelete} style={styles.optionItem}> 
          <Text style={styles.textAlignCenter}>삭제</Text>
          </TouchableOpacity>
     </View>}
    </TouchableOpacity>
    
  )
}