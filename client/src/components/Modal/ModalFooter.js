import React from 'react';

export default ({ onClickSubmit, submitDisable }) => (
  <div className="modal-footer">
    <button className="btn btn-success" onClick={() => onClickSubmit()} disabled={submitDisable}>
      Submit
    </button>
    <button className="btn btn-danger" data-dismiss="modal">
      Close
    </button>
  </div>
);
