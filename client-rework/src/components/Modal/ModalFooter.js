import React from 'react';

export default ({ onClickSubmit }) => (
  <div className="modal-footer">
    <button className="btn btn-success" onClick={() => onClickSubmit()}>
      Submit
    </button>
    <button className="btn btn-danger" data-dismiss="modal">
      Close
    </button>
  </div>
);
