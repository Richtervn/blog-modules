import './RadioSearchBar.css';
import React from 'react';
import classNames from 'classnames';
import { createElementId } from 'utils';

import { InputPrependIcon } from 'components/Inputs';

export default ({ customClass, onClickAdd, inputValue, onChange, inputName, options, radioName, radioValue }) => (
  <div className={classNames('radio-search-bar', customClass)}>
    <button className="btn" onClick={() => onClickAdd()}>
      <i className="fa fa-plus-square" />
    </button>
    <InputPrependIcon icon="search" value={inputValue} onChange={onChange} name={inputName} />
    <div className="radios-selector">
      {options.map((option, i) => (
        <div key={i} className="form-check form-check-inline">
          <input
            id={createElementId(option, 'opt')}
            className="form-check-input"
            type="radio"
            value={option}
            name={radioName}
            checked={radioValue === option}
            onChange={onChange}
          />
          <label className="form-check-label" htmlFor={createElementId(option, 'opt')}>
            &nbsp;{option}
          </label>
        </div>
      ))}
    </div>
  </div>
);
