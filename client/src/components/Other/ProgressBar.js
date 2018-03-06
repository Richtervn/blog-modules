import React from 'react';
import classNames from 'classnames';

export default ({ showProgress, progress, customClass = 'default' }) => (
  <div
    className={classNames(
      'progress-bar',
      'progress-bar-striped',
      { 'progress-bar-animated': progress < 100 },
      customClass
    )}
    style={{ width: `${progress || 0}%` }}>
    {showProgress && Math.round(progress) + '%'}
  </div>
);
