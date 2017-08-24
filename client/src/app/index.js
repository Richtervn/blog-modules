import React from 'react';
import { Provider } from 'react-redux';
import store from './store';

import TopNavBar from 'components/TopNavBar';
import RightNavBar from 'components/RightNavBar';

export default () =>
  <Provider store={store}>
    <div className="container-fluid" style={{ backgroundColor: '#2E2F2F' }}>
      <TopNavBar
        name={'HOME'}
        quote={"There's no place like home. There's no place like HOME!!!"}
        author={'Breaking Benjamin - Home'}
      />
      <div className="row">
        <div className="col">
          1 of 3
        </div>
        <div className="col">
          1 of 3
        </div>
        <div className="col">
          1 of 3
        </div>
      </div>
    </div>
  </Provider>;
