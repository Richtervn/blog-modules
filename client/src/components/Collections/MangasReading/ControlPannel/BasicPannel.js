import React from 'react';
import checkActiveChannel from 'utilities/checkActiveChannel';

export default ({ viewChannel, onChangeChannel, name }) => (
  <span className="pull-right">
    <button
      className={checkActiveChannel(viewChannel, 'Add', name)}
      onClick={() => onChangeChannel('Add')}>
      <i className="fa fa-plus" />
    </button>
    <button
      className={checkActiveChannel(viewChannel, 'Detail', name)}
      onClick={() => onChangeChannel('Detail')}>
      <i className="fa fa-file-o" />
    </button>
    <button
      className={checkActiveChannel(viewChannel, 'Edit', name)}
      onClick={() => onChangeChannel('Edit')}>
      <i className="fa fa-pencil" />
    </button>
    <button
      className={checkActiveChannel(viewChannel, 'Delete', name)}
      onClick={() => onChangeChannel('Delete')}>
      <i className="fa fa-times" />
    </button>
  </span>
);
