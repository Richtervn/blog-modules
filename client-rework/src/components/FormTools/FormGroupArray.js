import './FormGroupArray.css';
import React from 'react';

export default ({ label, type, name, placeholder, arrayValues, onChange, onRemove, onAdd }) => {
  return (
    <div className="form-group row">
      <label className="col-sm-3 col-form-label col-form-label-sm">
        <strong>{label}:</strong>
      </label>
      <div className="col-sm-9">
        {arrayValues.map((arrayValue, index) => (
          <div key={index} className="form-array-wrapper">
            <input
              type={type}
              className="form-control form-control-sm"
              placeholder={placeholder}
              value={arrayValue}
              onChange={event => onChange(event, index)}
              name={name}
            />
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
};
