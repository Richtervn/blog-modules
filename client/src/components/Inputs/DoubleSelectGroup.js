import './DoubleSelectGroup.css';
import React from 'react';
import classNames from 'classnames';

export default ({
  customClass = 'default',
  leftValue,
  rightValue,
  onLeftChange,
  onRightChange,
  leftOptions,
  rightOptions,
  leftPlaceholder,
  rightPlaceholder
}) => (
  <div className={classNames('double-select-group', customClass)}>
    <select className="form-control" value={leftValue} onChange={onLeftChange}>
      {leftPlaceholder && (
        <option value="default" hidden>
          {leftPlaceholder}
        </option>
      )}
      {leftOptions.map((opt, i) => (
        <option key={i} value={opt}>
          {opt}
        </option>
      ))}
    </select>
    <select className="form-control" value={rightValue} onChange={onRightChange}>
      {rightPlaceholder && (
        <option value="default" hidden>
          {rightPlaceholder}
        </option>
      )}
      {rightOptions.map((opt, i) => (
        <option key={i} value={opt}>
          {opt}
        </option>
      ))}
    </select>
  </div>
);
