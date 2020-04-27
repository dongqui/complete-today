import { StyleSheet } from 'react-native';
import layOut from '../../constants/Layout';

export default StyleSheet.create({
  modalContainer: {
    flex:1,
    justifyContent: 'flex-end',
    alignItems: 'stretch'
  },
  modalTextInput: {
    borderRadius: 5,
    marginBottom: 10,
    height: 60,
    color: '#000000',
    backgroundColor: 'white',
    fontSize: 30,
    padding: 10
  },
  modalButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});