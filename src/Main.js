import React, { useState, useEffect } from 'react';
import { Provider } from 'react-redux'
import { createStore } from 'redux';
import reducer from './reducers/index';

import { Platform, StatusBar, StyleSheet, View, Text } from 'react-native';
import { SplashScreen } from 'expo';

const store = createStore(reducer);

export default function Main(props) {
  const [ isLoadingComplete, setLoadingComplete ] = useState(false);

  useEffect(() => {
 
  }, []);

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return null;
  } else {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
        
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
