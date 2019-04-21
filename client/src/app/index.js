// import 'whatwg-fetch';

import './config';
import './fetchIntercept';
import './global.css';
import './notifications';

import 'lightbox-react/style.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'react-circular-progressbar/dist/styles.css';

import React, { Component } from 'react';
import { Router } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

import { Provider } from 'react-redux';
import store from './store';

import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';

import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import getTheme from 'theme';

import { ToastContainer } from 'react-toastify';
import { Modal } from 'common/Modal';
import { HeaderBar, NavigationBar, HeaderMenu } from 'common/Layout';
import { MusicPlayer, LyricsBox } from 'pages/Collections/Music';

import AppRoutes from './AppRoutes';

const newHistory = createBrowserHistory();

class App extends Component {
  constructor(props) {
    super(props);
    this.theme = createMuiTheme(getTheme());
  }

  render() {
    return (
      <Provider store={store}>
        <ThemeProvider theme={this.theme}>
          <MuiThemeProvider theme={this.theme}>
            <CssBaseline />
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
                <MusicPlayer />
                <LyricsBox />
              </div>
            </Router>
          </MuiThemeProvider>
        </ThemeProvider>
      </Provider>
    );
  }
}

export default DragDropContext(HTML5Backend)(App);
