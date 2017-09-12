import React from 'react';

export default ({ name, label, type, placeholder, onChange }) => {
  return (
    <div className="form-group row">
      <label htmlFor={`${name}Input`} className="col-sm-3 col-form-label col-form-label-sm"><strong>{label}:</strong></label>
      <div className="col-sm-9">
        <input
          type={type}
          className="form-control form-control-sm"
          id={`${name}Input`}
          placeholder={placeholder}
          onChange={onChange}
          name={name}
        />
      </div>
    </div>
  );
};
