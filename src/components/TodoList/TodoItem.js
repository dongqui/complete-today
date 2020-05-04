import React from 'react';
import { useDispatch } from 'react-redux';

import { Text, View, Image } from 'react-native';

import styles from './TodoStyles';

import { doneTodo, deleteTodo } from '../../reducers/todos';

export default function TodoItem({ todo }) {
  
  const dispatch = useDispatch();

  const doneTodo = () => {
    dispatch(doneTodo({...todo, status: 'done'}))
  }
  const deleteTodo = () => {
    dispatch(deleteTodo({...todo, activate: false}))
  }

  return (
    <View>
      <View style={{marginTop: 50, ...styles.todoItemContainer}}>
        <Image style={styles.tinyLogo} source={require('./robot-prod.png')} />
        <Text>{todo.content}</Text>
        <Text>{todo.content}</Text>
      </View>
      
      <View style={{height: 50, marginTop: 2, ...styles.todoItemContainer}}>
        <Text onPress={doneTodo} style={{flex: 1}}>완료</Text>
        <Text style={{flex: 1}}>수정</Text>
        <Text onPress={deleteTodo} style={{flex: 1}}>삭제</Text>
      </View>
    </View>
    
  )
}