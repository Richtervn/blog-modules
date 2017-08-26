import './fetchIntercept';

import React from 'react';
import { Provider } from 'react-redux';
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
    </div>
  </Provider>;
