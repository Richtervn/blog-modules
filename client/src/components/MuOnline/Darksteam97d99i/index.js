import React from 'react';
import TopNavBar from './TopNavBar';

import UserChannel from './UserChannel';

export default ({ activeChannel, onChangeActiveChannel, activeSideForm, onChangeActiveSideForm, onRegister }) => (
  <div className="ds9799-main-screen">
    <div className="mo-main-screen-background">
      <TopNavBar activeChannel={activeChannel} onChangeActiveChannel={onChangeActiveChannel} />
      {activeChannel == 'User' && (
        <UserChannel activeSideForm={activeSideForm} onChangeActiveSideForm={onChangeActiveSideForm} onRegister={onRegister}/>
      )}
    </div>
  </div>
);
