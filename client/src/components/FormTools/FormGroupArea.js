import React from 'react';

export default ({ name, label, onChange, value }) => {
  return (
    <div className="form-group row">
      <label htmlFor={`${name}Area`} className="col-sm-3 col-form-label col-form-label-sm"><strong>{label}:</strong></label>
      <div className="col-sm-9">
        <textarea
          rows={4}
          className="form-control form-control-sm"
          id={`${name}Area`}
          value={value}
          onChange={onChange}
          name={name}
        />
      </div>
    </div>
  );
};
