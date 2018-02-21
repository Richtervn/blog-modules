import './InfoCard.css';
import React from 'react';

export default ({ label, children }) => (
  <div className="ds9799-info-card">
    <div className="header">{label}</div>
    <div className="body">{children}</div>
  </div>
);
