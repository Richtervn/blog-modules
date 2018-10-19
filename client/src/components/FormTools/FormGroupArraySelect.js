import './FormGroupArray.css';
import React from 'react';
import classnames from 'classnames';

export default ({ label, arrayValues, name, onChange, onRemove, onAdd, placeholder, options, error }) => (
  <div className="form-group row">
    <label className="col-sm-3 col-form-label col-form-label-sm">
      <strong>{label}:</strong>
    </label>
    <div className="col-sm-9">
      {arrayValues.map((arrayValue, index) => (
        <div key={index} className="form-array-wrapper">
          <select
            className={classnames('form-control form-control-sm', {
              'is-valid': arrayValue && !error,
              'is-invalid': error
            })}
            onChange={e => onChange(e, index)}
            name={name}
            value={arrayValue || ''}>
            {placeholder && (
              <option value="" hidden disabled>
                {placeholder}
              </option>
            )}
            {options.map((opt, i) => (
              <option key={i} value={opt}>
                {opt}
              </option>
            ))}
          </select>
          <button className="btn btn-danger channel-button" type="button" onClick={() => onRemove(name, index)}>
            <i className="fa fa-times" />
          </button>
        </div>
      ))}
      <button className="btn btn-primary form-array-btn" type="button" onClick={() => onAdd(name)}>
        <span>
          <i className="fa fa-plus" />
        </span>&nbsp; {`Add ${name}`}
      </button>
    </div>
  </div>
);
