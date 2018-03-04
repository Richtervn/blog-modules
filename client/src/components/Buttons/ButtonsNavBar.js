import './ButtonsNavBar.css';
import React from 'react';
import classNames from 'classnames';

export default ({ customClass = 'default', features, onChangeFeature, activeFeature }) => (
  <span className={classNames('btns-nav-bar', customClass)}>
    {features.map((feature, i) => (
      <button
        key={i}
        className={classNames('btn', { active: feature.name === activeFeature })}
        onClick={() => onChangeFeature(feature.name)}
        data-toggle="tooltip"
        data-placement="bottom"
        title={feature.tooltip}>
        <i className={`fa fa-fw ${feature.icon}`} />
      </button>
    ))}
  </span>
);
