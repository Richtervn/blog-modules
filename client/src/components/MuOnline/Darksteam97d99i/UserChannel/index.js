import React from 'react';
import SideNavMenu from './SideNavMenu';

export default ({activeSideForm, onChangeActiveSideForm, onRegister}) => (
  <div className="row no-row-margin">
    <div className="col-3 no-col-margin">
      <SideNavMenu activeForm={activeSideForm} onChangeActiveForm={onChangeActiveSideForm} onRegister={onRegister}/>
    </div>
    <div className="col-9 no-col-margin">
    </div>
  </div>
);