import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Text, View, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import styles from './TodoStyles';

import { pressTodo } from '../../reducers/todos';

export default function DoneItem({ todo }) {
  const dispatch = useDispatch();
  const pressed = useSelector(state => state.todos.pressed);

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
        <AntDesign name="smile-circle" size={24} color="black" />
        <Text style={styles.doneItem} >{todo.content}</Text>
      </View>

      {pressed === todo.id && <Text>test</Text>}
    </TouchableOpacity>
  )
}