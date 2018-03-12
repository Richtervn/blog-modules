import './Introduction.css';
import React from 'react';

import TopNavBar from './TopNavBar.container';
import { Home } from './Home';

export default ({ activeTab }) => (
  <div className="container-fluid">
    <div className="row">
      <TopNavBar />
      {activeTab === 'Home' && <Home />}
    </div>
  </div>
);
