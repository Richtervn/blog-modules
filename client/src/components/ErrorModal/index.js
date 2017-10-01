import React from 'react';
import { defineErrorModalDisplay } from 'utilities';

export default ({ id, text }) => {
  const { header } = defineErrorModalDisplay(id);

  return (
    <div className="modal fade" id={id} style={{ color: 'black' }}>
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <img className="modal-icon" src={header.icon} />
            <strong>{header.label}</strong>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <p className="alert alert-danger">{text}</p>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-danger" data-dismiss="modal">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
