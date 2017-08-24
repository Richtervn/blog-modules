import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import allReducer from 'modules';

const store = createStore(
  allReducer,
  applyMiddleware(thunk)
);

store.subscribe(() => {
  console.log('STORE');
  console.log(store.getState());
});

export default store;
