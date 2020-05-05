import React from 'react';
import { StyleSheet, Text } from 'react-native';

function Header({ leftComponent, centerComponent, rightComponent, style }) {

  return (
    <View style={{...styles.container, ...style}}>
      <View>
        {leftComponent}
      </View>
      <View>
        {centerComponent}
      </View>
      <View>
        {rightComponent}
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