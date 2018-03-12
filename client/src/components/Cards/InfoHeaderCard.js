import './InfoHeaderCard.css';
import React from 'react';
import classNames from 'classnames';

export default ({ label, children, customClass = 'default' }) => (
  <div className={classNames('info-header-card', customClass)}>
    <div className="header">{label}</div>
    <div className="body">{children}</div>
  </div>
);
