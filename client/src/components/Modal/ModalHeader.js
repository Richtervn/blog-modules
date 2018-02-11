import React from 'react';

export default ({ iconUrl, label }) => (
  <div className="modal-header">
    {iconUrl && <img className="modal-icon" src={iconUrl} alt="Modal Icon"/>}
    <div className="modal-label">{label}</div>
    <button type="button" className="close" data-dismiss="modal">
      <span>&times;</span>
    </button>
  </div>
);
