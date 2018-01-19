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
import { Modal } from 'common/Modal';
import { HeaderBar, NavigationBar, Page } from 'common/Layout';

import { MangasReading } from 'pages/Collections/MangasReading';
import { FlashGames } from 'pages/FlashGames';

const newHistory = createBrowserHistory();

export default () => (
  <Provider store={store}>
    <Router history={newHistory}>
      <div className="container-fluid">
        <HeaderBar />
        <div className="row">
          <NavigationBar />
          <Page>
            <Route exact path="/mangas_reading" component={MangasReading} />
            <Route path="/flash_games/:name" component={FlashGames} />
          </Page>
        </div>
        <ToastContainer autoClose={1500} closeButton={false} />
        <Modal />
      </div>
    </Router>
  </Provider>
);
