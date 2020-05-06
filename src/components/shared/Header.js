import React from 'react';
import { StyleSheet, Text } from 'react-native';

function Header({ leftComponent, centerComponent, rightComponent, style }) {

  return (
    <View style={{...styles.container, ...style}}>
      <View>
        {leftComponent ? leftComponent : ''}
      </View>
      <View>
        {centerComponent ? centerComponent : ''}
      </View>
      <View>
        {rightComponent ? rightComponent : ''}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent:'space-between',
  },
})

export default Header;