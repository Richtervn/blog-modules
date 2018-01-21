import './Modal.css';
import React from 'react';

export default ({ modalStyles, dialogStyles, children }) => (
  <div className="modal fade" id="modal" style={modalStyles}>
    <div className="modal-dialog" role="document" style={dialogStyles}>
      <div className="modal-content">{children}</div>
    </div>
  </div>
);
