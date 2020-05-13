import { StyleSheet } from 'react-native';
import { textAlignCenter } from '../shared/sharedStyles';
import layout from '../../constants/Layout';

export default StyleSheet.create({
  // -------------------- Modal ------------
  textAlignCenter,

  // -------------------- Modal ------------
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


  // -------------------todoList -------------
  container: {
    width: layout.window.width - 40,
    marginTop: 40,
    marginBottom: 20,
    flex: 1,
    justifyContent: 'flex-start',
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#ffffff',
  },
  title: {
    fontWeight: '300',
    fontSize: 30,
  },
  list: {
    flex: 1,
  },

  listHeader: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  listHeaderButton: {
    flex: 1,
  },


  // -------------------- TodoItem ------------
  itemContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 10,
    marginTop: 10,
  },

  optionList: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 10,
  },

  optionItem: {
    flex:1,
    textAlign: 'center'
  },

  todoItem: {
    fontSize: 20,
    fontWeight: '400',
    flex: 1,
    marginLeft: 20,
  },

  doneItem: {
    flex: 1,
    fontSize: 20,
    marginLeft: 20,
    fontWeight: '100',
    textDecorationLine: 'line-through',
  },

  tinyLogo: {
    width: 50,
    height: 50,
  },
});