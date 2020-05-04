import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addTodoThunk } from '../../reducers/todos';

import { Text, View, Button, TextInput, ScrollView } from 'react-native';
import Modal from 'react-native-modal';

import styles from './TodoStyles';
import TodoItem from './TodoItem';
import DoneItem from './DoneItem';
import CustomButton from '../shared/CustomButton';

function TodoList() {
  const [ modalVisible, setModalVisible ] = useState(false);
  const [ content, setContent ] = useState('');
  const dispatch = useDispatch();
  const { todoList, doneList } = useSelector(state => state.todos, []);

  const submitTodo = () => {
    dispatch(addTodoThunk({ content, status: 'todo', activate: 'true' }));
    setContent('');
    setModalVisible(false);
  }
  useEffect(() => {

  }, [todoList]);

  return (
    <View>
      <Button
       title="Press me"
       color="#f194ff"
       onPress={() => setModalVisible(true)}
       />
      <ScrollView>
        {todoList.map(todo => <TodoItem todo={todo}/>)}
      </ScrollView>
      <ScrollView>
        {doneList.map(todo => <DoneItem todo={todo}/>)}
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