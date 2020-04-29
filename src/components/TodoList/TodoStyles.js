import { StyleSheet } from 'react-native';
import layOut from '../../constants/Layout';

export default StyleSheet.create({
  // -------------------- Modal ------------
  modalContainer: {
    flex:1,
    justifyContent: 'flex-start',
    marginTop: 140,
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

  // -------------------- TodoItem ------------
  todoItemContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'yellow'
  },

  tinyLogo: {
    width: 50,
    height: 50,
  },
});