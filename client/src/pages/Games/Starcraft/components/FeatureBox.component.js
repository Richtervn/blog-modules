import './FeatureBox.css';
import React from 'react';

export default () => (
  <div className="sc-feature-box">
    <div className="sc-feature-box-btns">
      <button className="btn">
        <i className="fa fa-plus-circle" />
      </button>
      <button className="btn">
        <i className="fa fa-search" />
      </button>
      <button className="btn">
        <i className="fa fa-sort" />
      </button>
    </div>
    <div className="sc-feature-box-input-wrapper">
      <input type="text" className="sc-feature-box-input" />
    </div>
  </div>
);
