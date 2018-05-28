import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import socket from './socket';

import allReducer from './reducers';

const store = createStore(
  allReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk.withExtraArgument(socket))
);

export default store;
