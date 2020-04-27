import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';


function CustomButton({ onPress, title, buttonColor, titleColor, customStyles={} }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, {backgroundColor: buttonColor, ...customStyles}]}
    >
      <Text 
      style={[styles.title, {color: titleColor, ...customStyles}, ]}>
        {title}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 10,
    flex: 1,
    margin: 2
  },
  title: {
    fontSize: 30,
    padding: 10,
    textAlign: 'center'
  }
});

export default CustomButton;