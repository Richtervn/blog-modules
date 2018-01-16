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

import { HeaderBar, NavigationBar, Page } from 'common/Layout';

import { MangasReading } from 'pages/Collections/MangasReading';

// import MangasReading from 'containers/Pages/Collections/MangasReading';
// import AppMenu from 'containers/Pages/Setting/AppMenu';
// import FlashGames from 'containers/Pages/FlashGames';

// import Modal from 'components/Modal';

// export default () => (

//       <div>
//         <HeaderBar />
//         <NavigationBar />
//         <Page>
//
//           <Route exact path="/app_menu" component={AppMenu} />
//           <Route path="/flash_games/:name" component={FlashGames} />
//         </Page>
//
//         <Modal />
//       </div>

// );

// <Route exact path="/" component={MainLayout} />
// <Route exact path="/building" component={BuildingLayout} />
// <Route path="/building/:id" component={BuildingInfo} />

// <button onClick={() => {window.$('#modal').modal('show')}}>dcm</button>

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
          </Page>
        </div>
        <ToastContainer autoClose={1500} closeButton={false} />
      </div>
    </Router>
  </Provider>
);
