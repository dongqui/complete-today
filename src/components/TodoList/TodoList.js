import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { postTodoThunk, putTodoThunk } from '../../reducers/todos';

import { Text, View, TextInput, ScrollView, Button } from 'react-native';
import Modal from 'react-native-modal';
import { Entypo } from '@expo/vector-icons';

import styles from './TodoStyles';
import TodoItem from './TodoItem';
import DoneItem from './DoneItem';
import { CustomButton, Header} from '../shared/index';

import { clearData } from '../../localStorage/index'

function TodoList() {
  const [ modalVisible, setModalVisible ] = useState(false);
  const [ content, setContent ] = useState('');
  const [ toEdit, setToEdit]  = useState(null);
  const dispatch = useDispatch();
  const { todoList } = useSelector(state => state.todos, []);

  const submitTodo = () => {
    if (toEdit) {
      dispatch(putTodoThunk({...toEdit, content}))
    } else {
      dispatch(postTodoThunk({ content, status: 'todo', activate: 'true' }));
    }
    setContent('');
    setModalVisible(false);
    setToEdit(null);
  }

  const cancelSubmit = () => {
    setContent('');
    setModalVisible(false);
    setToEdit(null);
  }

  const edit = (todo) => {
    setToEdit(todo);
    setContent(todo.content);
    setModalVisible(true);
  }

  return (
    <View style={styles.container}>      
      {/* <Button
        title="clear"
        color="#f194ff"
        onPress={() => clearData()}
       /> */}
      <View style={styles.list}>
        <Header
          leftComponent={<Text style={styles.title}>오늘 할 일</Text>}
          rightComponent={<Entypo name="edit" size={24} onPress={() => setModalVisible(true)}/>}
        />        
        <ScrollView>
          {todoList.filter(todo => todo.activate && todo.status === 'todo').map(todo => <TodoItem key={todo.id} todo={todo} edit={edit}/>)}
        </ScrollView>
      </View>
      
      <View style={styles.list}>
        <Header
          leftComponent={<Text style={styles.title}>오늘 해낸 일</Text>}
        />
        <ScrollView>
          {todoList.filter(todo => todo.activate && todo.status === 'done').map(todo => <DoneItem key={todo.id} todo={todo}/>)}
        </ScrollView>
      </View>

      {/* ------------ Modal ----------------- */}
      <Modal isVisible={modalVisible}>
        <View style={styles.modalContainer}>
          <TextInput
            defaultValue={content}
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
              onPress={cancelSubmit}
            /> 
          </View>
        </View>
      </Modal>
    </View>
  )
}

export default TodoList