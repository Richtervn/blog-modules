import './Introduction.css';
import React from 'react';

import TopNavBar from './TopNavBar.container';
import { Home } from './Home';
import { HallofFame } from './HallofFame';

export default ({ activeTab }) => (
  <div className="container-fluid">
    <div className="row">
      <TopNavBar />
      {activeTab === 'Home' && <Home />}
      {activeTab === 'Hall of Fame' && <HallofFame />}
    </div>
  </div>
);
