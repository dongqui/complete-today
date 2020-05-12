import React from 'react';
import { StyleSheet, View } from 'react-native';

function Header({ leftComponent, centerComponent, rightComponent, style }) {

  return (
    <View style={{...styles.container, ...style}}>
      <View>
        {leftComponent ? leftComponent : null}
      </View>
      <View>
        {centerComponent ? centerComponent : null}
      </View>
      <View>
        {rightComponent ? rightComponent : null}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#ffffff',
    borderBottomColor: '#bbb',
    borderBottomWidth: 1,
    marginBottom: 10,
  },
})

export default Header;