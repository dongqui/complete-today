import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { postTodoThunk } from '../../reducers/todos';

import { Text, View, Button, TextInput, ScrollView } from 'react-native';
import Modal from 'react-native-modal';

import styles from './TodoStyles';
import TodoItem from './TodoItem';
import DoneItem from './DoneItem';
import CustomButton from '../shared/CustomButton';

import { clearData } from '../../localStorage/index'

function TodoList() {
  const [ modalVisible, setModalVisible ] = useState(false);
  const [ content, setContent ] = useState('');
  const dispatch = useDispatch();
  const { todoList } = useSelector(state => state.todos, []);

  const submitTodo = () => {
    dispatch(postTodoThunk({ content, status: 'todo', activate: 'true' }));
    setContent('');
    setModalVisible(false);
  }
  console.log(todoList)
  return (
    <View>
      
      <Button
       title="Press me"
       color="#f194ff"
       onPress={() => setModalVisible(true)}
       />

      {/* <Button
        title="clear"
        color="#f194ff"
        onPress={() => clearData()}
       /> */}
      <ScrollView>
        {todoList.filter(todo => todo.activate && todo.status === 'todo').map(todo => <TodoItem key={todo.id} todo={todo}/>)}
      </ScrollView>
      <ScrollView>
        {todoList.filter(todo => todo.activate && todo.status === 'done').map(todo => <DoneItem key={todo.id} todo={todo}/>)}
      </ScrollView>


      {/* ------------ Modal ----------------- */}
      <Modal isVisible={modalVisible}>
        <View style={styles.modalContainer}>
          <TextInput
            autoFocus={true}
            style={styles.modalTextInput}       
            onChangeText={(text) => setContent(text)}             
          />
          <View style={styles.modalButtonContainer}>            
            <CustomButton
              title="확인"
              buttonColor='black'
              titleColor='white'
              onPress={submitTodo}
            />                    
            <CustomButton
              title="취소"      
              buttonColor='black'
              titleColor='white'        
              onPress={() => setModalVisible(false)}
            /> 
          </View>
        </View>
      </Modal>
    </View>
  )
}

export default TodoList