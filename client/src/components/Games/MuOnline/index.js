import React from 'react';

import ControlPannel from './ControlPannel';
import InformationScreen from './InformationScreen';

export default ({activeView, onSwitchView}) => (
  <div className="mo-main-screen">
    <div className="mo-main-screen-background">
      <div className="row no-row-margin">
        <div className="col-3 no-col-margin mo-full-screen">
          <ControlPannel activeView={activeView} onSwitchView={onSwitchView}/>
        </div>
        <div className="col-9 no-col-margin mo-full-screen">
          <InformationScreen/>
        </div>
      </div>
    </div>
  </div>
);