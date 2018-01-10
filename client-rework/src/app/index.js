import 'whatwg-fetch';
import './fetchIntercept';

import React from 'react';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import store from './store';

import {TopBar} from 'components/Layout';

export default () => (
  <Provider store={store}>
    <div className="container-fluid"><TopBar/></div>
  </Provider>
);
