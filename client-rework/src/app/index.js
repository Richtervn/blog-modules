import 'whatwg-fetch';

import './config';
import './fetchIntercept';
import './global.css';

import React, { Component } from 'react';
import { Router } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

import { Provider } from 'react-redux';
import store from './store';

import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';

import { ToastContainer } from 'react-toastify';
import { Modal } from 'common/Modal';
import { HeaderBar, NavigationBar, HeaderMenu } from 'common/Layout';
import AppRoutes from './AppRoutes';

const newHistory = createBrowserHistory();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={newHistory}>
          <div className="container-fluid">
            <HeaderBar />
            <HeaderMenu />
            <div className="row">
              <NavigationBar />
              <AppRoutes />
            </div>
            <ToastContainer autoClose={1500} closeButton={false} />
            <Modal />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default DragDropContext(HTML5Backend)(App);
