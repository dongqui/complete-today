import React from 'react';

import { Text, View, Image } from 'react-native';

import styles from './TodoStyles';

export default function DoneItem({ todo }) {

  return (
    <View>
      <View style={{...styles.todoItemContainer, backgroundColor: 'red'}}>
        <Image style={styles.tinyLogo} source={require('./robot-prod.png')} />
        <Text>{todo}</Text>
        <Text>{todo}</Text>
      </View>

    </View>
    
  )
}