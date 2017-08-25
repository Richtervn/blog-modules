import './fetchIntercept';

import React from 'react';
import { Provider } from 'react-redux';
import store from './store';

import TopNavBar from 'components/TopNavBar';
import SideNavBar from 'containers/SideNavBar';
import Navigation from './Navigation';
import TimeLine from 'components/TimeLine';

import Modal from 'containers/Modal';

export default () =>
  <Provider store={store}>
    <div className="container-fluid">
      <TopNavBar
        name={'HOME'}
        quote={"There's no place like home. There's no place like HOME!!!"}
        author={'Breaking Benjamin - Home'}
      />
      <div className="row">
        <SideNavBar />
        <div className="col blog-main-screen">
          <TimeLine />
        </div>
      </div>
      <Modal/>
    </div>
  </Provider>;
