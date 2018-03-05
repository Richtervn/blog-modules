import './InputWithButton.css';
import React from 'react';
import classNames from 'classnames';

export default ({
  btnClass,
  btnDisabled,
  btnIcon,
  customClass = 'default',
  name,
  onChange,
  onClick,
  placeholder,
  type = 'text',
  value
}) => (
  <div className={classNames('input-with-button', customClass)}>
    <input
      key="iwb-i"
      type={type}
      className="form-control"
      value={value}
      onChange={onChange}
      name={name}
      placeholder={placeholder}
    />
    <button key="iwb-b" className={classNames('btn', btnClass)} disabled={btnDisabled} onClick={onClick}>
      <i className={`fa fa-${btnIcon}`} />
    </button>
  </div>
);
