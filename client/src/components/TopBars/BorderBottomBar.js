import './BorderBottomBar.css';
import React from 'react';
import classNames from 'classnames';
import { withRouter } from 'react-router-dom';

const BorderBottomBar = ({ tabs, activeTab, history, onSetActiveTab, customClass }) => (
  <div className={classNames('row border-bottom-bar', customClass)}>
    {tabs.map((tab, i) => (
      <div className="col" key={i}>
        <div
          className={classNames('row', 'tab', { active: activeTab === tab.name })}
          onClick={() => {
            onSetActiveTab(tab.name);
            history.push(tab.route);
          }}>
          {tab.name}
        </div>

        {activeTab === tab.name && (
          <div className="row">
            <div className="active-bar" />
          </div>
        )}
      </div>
    ))}
  </div>
);

export default withRouter(BorderBottomBar);
