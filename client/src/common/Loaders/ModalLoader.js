import './ModalLoader.css';
import React from 'react';

export default () => (
  <div className="modal-loader">
    <div>
      <i className="fa fa-spinner fa-pulse fa-3x fa-fw" />
      <span className="sr-only">Loading...</span>
    </div>
  </div>
);
