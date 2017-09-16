import React from 'react';
import checkActiveChannel from 'utilities/checkActiveChannel';

export default ({ activeTool, onChangeActiveTool }) => (
  <span className="pull-left">
    <button
      className={checkActiveChannel(activeTool, 'QuickUpdate', 'MangasReadingChannel')}
      onClick={() => onChangeActiveTool('QuickUpdate')}>
      <i className="fa fa-plus-circle" />
    </button>
    <button
      className={checkActiveChannel(activeTool, 'Search', 'MangasReadingChannel')}
      onClick={() => onChangeActiveTool('Search')}>
      <i className="fa fa-search" />
    </button>
    <button
      className={checkActiveChannel(activeTool, 'Sort', 'MangasReadingChannel')}
      onClick={() => onChangeActiveTool('Sort')}>
      <i className="fa fa-sort" />
    </button>
  </span>
);
