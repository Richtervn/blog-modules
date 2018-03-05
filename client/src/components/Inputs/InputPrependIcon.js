import './InputPrependIcon.css';
import React from 'react';
import classNames from 'classnames';

export default ({ value, onChange, icon = 'search', customClass, name }) => (
  <div className={classNames('input-group input-prepend-icon', customClass)}>
    <div className="input-group-prepend">
      <span className="input-group-text">
        <i className={`fa fa-${icon}`} />
      </span>
      <input className="form-control" type="text" onChange={onChange} name={name} value={value} />
    </div>
  </div>
);
