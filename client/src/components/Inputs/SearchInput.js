import './SearchInput.css';
import React from 'react';
import classNames from 'classnames';

export default ({ value, name, placeholder, onChange, customClass = 'default' }) => (
  <div className={classNames('search-input', customClass)}>
    <input className="form-control" value={value} name={name} placeholder={placeholder} onChange={onChange} />
    <div className="icon">
      <i className="fa fa-search" />
    </div>
  </div>
);
