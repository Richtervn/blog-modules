import 'whatwg-fetch';

import './config';
import './fetchIntercept';
import './global.css';

import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

import { Provider } from 'react-redux';
import store from './store';

import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';

import { ToastContainer } from 'react-toastify';
import { Modal } from 'common/Modal';
import { HeaderBar, NavigationBar, Page, HeaderMenu } from 'common/Layout';

import { MangasReading } from 'pages/Collections/MangasReading';
import { FlashGames } from 'pages/FlashGames';

import { Projects } from 'pages/Home';

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
              <Page>
                <Route exact path="/" component={Projects} />
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
  }
}

export default DragDropContext(HTML5Backend)(App);
