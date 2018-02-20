import React from 'react';

export default ({ type, icon, onChange, value, name, disabled, placeholder }) => (
  <div className="input-group">
    <div className="input-group-prepend">
      <span className="input-group-text">
        <i className={`fa fa-${icon} fa-fw`} />
      </span>
      <input
        type={type}
        className="form-control"
        value={value}
        onChange={onChange}
        name={name}
        disabled={disabled}
        placeholder={placeholder}
      />
    </div>
  </div>
);
