import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import Main from './src/Main.js';
import reducer from './src/reducers/index';

const store = createStore(reducer, applyMiddleware(thunk));
const App = () => <Provider store={store}><Main/></Provider>

export default App