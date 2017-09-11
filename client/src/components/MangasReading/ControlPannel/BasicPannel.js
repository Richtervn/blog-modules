import React from 'react';
import checkActiveChannel from 'utilities/checkActiveChannel';

export default ({ viewChannel, onChangeChannel }) => (
  <span className="pull-right">
    <button
      className={checkActiveChannel(viewChannel, 'Add', 'MangasReadingChannel')}
      onClick={() => onChangeChannel('Add')}>
      <i className="fa fa-plus" />
    </button>
    <button
      className={checkActiveChannel(viewChannel, 'Detail', 'MangasReadingChannel')}
      onClick={() => onChangeChannel('Detail')}>
      <i className="fa fa-file-o" />
    </button>
    <button
      className={checkActiveChannel(viewChannel, 'Edit', 'MangasReadingChannel')}
      onClick={() => onChangeChannel('Edit')}>
      <i className="fa fa-pencil" />
    </button>
    <button
      className={checkActiveChannel(viewChannel, 'Delete', 'MangasReadingChannel')}
      onClick={() => onChangeChannel('Delete')}>
      <i className="fa fa-times" />
    </button>
  </span>
);
