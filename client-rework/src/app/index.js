import 'whatwg-fetch';
import './config';
import './fetchIntercept';
import './global.css';

import React from 'react';
import { Router, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import { Provider } from 'react-redux';
import store from './store';

import { ToastContainer } from 'react-toastify';
import HeaderBar from 'containers/Layout/HeaderBar';
import NavigationBar from 'containers/Layout/NavigationBar';

import { PageWrapper } from 'components/common';

import MangasReading from 'containers/Pages/Collections/MangasReading';
import AppMenu from 'containers/Pages/Setting/AppMenu';
import FlashGames from 'containers/Pages/FlashGames';

import Modal from 'components/Modal';

const newHistory = createBrowserHistory();

export default () => (
  <Provider store={store}>
    <Router history={newHistory}>
      <div className="container-fluid">
        <HeaderBar />
        <div className="row">
          <NavigationBar />
          <PageWrapper>
            <Route exact path="/mangas_reading" component={MangasReading}/>
            <Route exact path="/app_menu" component={AppMenu} />
            <Route path="/flash_games/:name" component={FlashGames}/>
          </PageWrapper>
        </div>
        <ToastContainer autoClose={1500} />
        <Modal />
      </div>
    </Router>
  </Provider>
);

// <Route exact path="/" component={MainLayout} />
// <Route exact path="/building" component={BuildingLayout} />
// <Route path="/building/:id" component={BuildingInfo} />

// <button onClick={() => {window.$('#modal').modal('show')}}>dcm</button>
