import 'whatwg-fetch';
import './fetchIntercept';

import React from 'react';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import store from './store';

import HeaderBar from 'containers/Layout/HeaderBar';

export default () => (
  <Provider store={store}>
    <div className="container-fluid">
      <HeaderBar />
      <ToastContainer autoClose={1500}/>
    </div>
  </Provider>
);
