import React from 'react';

export default ({ customClass, features, featureClass, onChangeFeature, activeFeature }) => (
  <span className={customClass}>
    {features.map((feature, i) => (
      <button
        key={i}
        className={`${featureClass} ${feature.name === activeFeature ? 'active' : ''}`}
        onClick={() => onChangeFeature(feature.name)}
        data-toggle="tooltip"
        data-placement="bottom"
        title={feature.tooltip}>
        <i className={`fa fa-fw ${feature.icon}`} />
      </button>
    ))}
  </span>
);
