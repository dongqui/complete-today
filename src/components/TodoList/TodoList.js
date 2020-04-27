import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '../../reducers/todos';

import { Text, View, Button, TextInput } from 'react-native';
import Modal from 'react-native-modal';

import styles from './TodoStyles';
import TodoItem from './TodoItem';

function TodoList() {
  const [ isModalVisible, setIsModalVisible ] = useState(false);

  return (
    <View>
      <Button
       title="Press me"
       color="#f194ff"
       onPress={() => setIsModalVisible(true)}
       />
      <Modal isVisible={isModalVisible}>
        <View style={styles.modalContainer}>
        <TextInput
          autoFocus={true}
          style={styles.modalTextInput}                    
        />
          <View style={styles.modalButtonContainer}>
            <View style={styles.modalButton}>
              <Button
                title="확인"
                color="#000000"
                onPress={() => setIsModalVisible(false)}
              />
            </View>
            <View style={styles.modalButton}>
              <Button
                title="취소"
                color="#000000"
                onPress={() => setIsModalVisible(false)}
              /> 
            </View>                     
          </View>        
        </View>
      </Modal>
    </View>
  )
}

export default TodoList