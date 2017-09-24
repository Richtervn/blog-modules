import React from 'react';
import RowNavigationBar from './RowNavigationBar';

export default ({activeView, onSwitchView}) => (
  <div className="mo-control-pannel">
    <RowNavigationBar headers={['Versions','Tools']} activeView={activeView} onSwitchView={onSwitchView}/>
  </div>
)