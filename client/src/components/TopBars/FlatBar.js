import './FlatBar.css';
import React from 'react';
import classNames from 'classnames';

export default ({ tabs, activeTab, customClass = 'default', onClickTab }) => (
  <div className={classNames('flat-bar', customClass)}>
    {tabs.map(tab => (
      <div key={tab} className={classNames('flat-tab', { active: activeTab === tab })} onClick={() => onClickTab(tab)}>
        {tab}
      </div>
    ))}
  </div>
);
