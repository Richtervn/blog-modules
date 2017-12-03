import 'whatwg-fetch';
import './fetchIntercept';

import React from 'react';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import store from './store';

import TopNavBar from 'containers/TopNavBar';
import SideNavBar from 'containers/SideNavBar';
import AddModal from 'containers/AddModal';
import Navigation from 'containers/Navigation';

export default () =>
  <Provider store={store}>
    <div className="container-fluid">
      <TopNavBar />
      <div className="row">
        <SideNavBar />
        <Navigation />
      </div>
      <AddModal />
      <ToastContainer autoClose={1500}/>
    </div>
  </Provider>;
