import './TextLabelCard.css';
import React from 'react';
import classnames from 'classnames';

export default ({label, children, customClass = 'default'}) => (
  <div className={classnames("text-label-card", customClass)}>
    <div className="label">{label}</div>
    <div className="content">{children}</div>
  </div>
);
