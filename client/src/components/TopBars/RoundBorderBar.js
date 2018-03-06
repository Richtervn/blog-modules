import './RoundBorderBar.css';
import React from 'react';
import { withRouter } from 'react-router-dom';
import classNames from 'classnames';

const RoundBorderBar = ({ tabs, customClass = 'default', history, activeTab, onClick }) => (
  <div className={classNames('round-border-bar', customClass)}>
    <div className="tabs-wrapper">
      {tabs.map((tab, i) => (
        <div
          key={i}
          className={classNames('tab-content', { active: tab.name === activeTab })}
          onClick={() => {
            onClick(tab.name);
            history.push(tab.route);
          }}>
          {tab.name}
        </div>
      ))}
    </div>
  </div>
);

export default withRouter(RoundBorderBar);
