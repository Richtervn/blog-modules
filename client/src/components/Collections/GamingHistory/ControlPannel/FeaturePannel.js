import React from 'react';
import checkActiveChannel from 'utilities/checkActiveChannel';

export default ({ activeTool, onChangeActiveTool, name }) => (
  <span className="pull-left">
    <button
      className={checkActiveChannel(activeTool, 'Search', name)}
      onClick={() => onChangeActiveTool('Search')}>
      <i className="fa fa-search" />
    </button>
    <button
      className={checkActiveChannel(activeTool, 'Sort', name)}
      onClick={() => onChangeActiveTool('Sort')}>
      <i className="fa fa-sort" />
    </button>
  </span>
);
