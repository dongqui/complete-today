import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '../../reducers/todos';

import { Text, View, Button, TextInput } from 'react-native';
import Modal from 'react-native-modal';

import styles from './TodoStyles';
import TodoItem from './TodoItem';
import CustomButton from '../shared/CustomButton';

function TodoList() {
  const [ isModalVisible, setIsModalVisible ] = useState(false);

  return (
    <View>
      <Button
       title="Press me"
       color="#f194ff"
       onPress={() => setIsModalVisible(true)}
       />
       <CustomButton
        title='hello world'
        buttonColor='black'
        titleColor='white'
       >

       </CustomButton>
      <Modal isVisible={isModalVisible}>
        <View style={styles.modalContainer}>
          <TextInput
            autoFocus={true}
            style={styles.modalTextInput}                    
          />
          <View style={styles.modalButtonContainer}>            
            <CustomButton
              title="확인"
              buttonColor='black'
              titleColor='white'
              onPress={() => setIsModalVisible(false)}
            />                    
            <CustomButton
              title="취소"      
              buttonColor='black'
              titleColor='white'        
              onPress={() => setIsModalVisible(false)}
            /> 
          </View>                          
        </View>
      </Modal>
    </View>
  )
}

export default TodoList