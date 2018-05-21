import appConfig from './config';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import io from 'socket.io-client';

import allReducer from './reducers';

const socket = io.connect(appConfig.SOCKET_HOST);

const store = createStore(
  allReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk.withExtraArgument(socket))
);

export default store;
