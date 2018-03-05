import './InputSelectGroup.css';
import React from 'react';
import classNames from 'classnames';

export default ({
  customClass = 'default',
  selectName,
  selectValue,
  inputName,
  inputValue,
  options,
  onChange,
  onChangeSelect,
  onChangeInput
}) => (
  <div className={classNames('input-select-group', customClass)}>
    <select className="form-control" value={selectValue} name={selectName} onChange={onChange || onChangeSelect}>
      {options.map((opt, i) => (
        <option key={i} value={opt}>
          {opt}
        </option>
      ))}
    </select>
    <input
      type="text"
      className="form-control"
      value={inputValue}
      onChange={onChange || onChangeInput}
      name={inputName}
    />
  </div>
);
