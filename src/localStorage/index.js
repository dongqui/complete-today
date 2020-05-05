import { AsyncStorage } from 'react-native';

export const setData = async (key, value) => {
  try {
    return await AsyncStorage.setItem(key, value);
  } catch (e) {
    return e;
  }
}

export const getData = async (key) => {
  try {
    return await AsyncStorage.getItem(key);
  } catch(e) {
    return e;
  }
}