import { StyleSheet } from 'react-native';
import layout from '../../constants/Layout';

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


  // -------------------todoList -------------
  container: {
    width: layout.window.width - 50,
    marginTop: 50,
    marginBottom: 50,
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
  },

  doneItem: {
    fontSize: 20,
    fontWeight: '100',
    textDecorationLine: 'line-through'
  },

  tinyLogo: {
    width: 50,
    height: 50,
  },
});