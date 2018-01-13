import React from 'react';

export default () => (
  <div className="modal fade" id="modal" style={{ color: 'black' }}>
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-header" />
        <div className="modal-body" />
        <div className="modal-footer">
          <button type="button" className="btn btn-success" data-dismiss="modal">
            Submit
          </button>
          <button type="button" className="btn btn-danger" data-dismiss="modal">
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
);
