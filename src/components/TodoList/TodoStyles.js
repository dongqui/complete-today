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
    backgroundColor: 'white'
  },
  modalButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  modalButton: {
    margin: 2,
    flex:1,
    borderRadius: 10,
    width: '100%',
  }
});