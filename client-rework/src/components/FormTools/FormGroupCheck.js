import React from 'react';

export default ({ label, onChangeCheck, name, value }) => (
  <div className="col no-col-margin text-center">
    <label className="form-check-label">
      <input type="checkbox" className="form-check-input" onChange={() => onChangeCheck(name)} checked={value} />
      &nbsp;{label}&nbsp;
    </label>
  </div>
);
