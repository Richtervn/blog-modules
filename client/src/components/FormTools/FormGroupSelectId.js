import React from 'react';

export default ({ name, label, placeholder, options, onChange, value }) => {
  return (
    <div className="form-group row">
      <label htmlFor={`${name}Input`} className="col-sm-3 col-form-label col-form-label-sm">
        <strong>{label}:</strong>
      </label>
      <div className="col-sm-9">
        <select className="form-control form-control-sm" onChange={onChange} name={name} value={value || 'default'}>
          {placeholder && (
            <option value="default" hidden>
              {placeholder}
            </option>
          )}
          {options.map((opt, i) => (
            <option key={i} value={opt._id}>
              {opt.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
