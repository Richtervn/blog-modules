import './TopNavBar.css';
import React from 'react';
import { withRouter } from 'react-router-dom';

const tabs = [
  { name: 'Mods', route: '/diablo_ii/mods' },
  { name: 'Characters', route: '/diablo_ii/characters' },
  { name: 'Survival Kits', route: '/diablo_ii/survival_kits' },
  { name: 'Tools', route: '/diablo_ii/tools' },
  { name: 'Extra', route: '/diablo_ii/extra' }
];

const TopNavBar = ({ activeTab, history, onSetActiveTab }) => (
  <div className="row">
    {tabs.map((tab, i) => (
      <div className="col" key={i}>
        <div
          className={`row d2-tab ${activeTab === tab.name ? 'active' : ''}`}
          onClick={() => {
            onSetActiveTab(tab.name);
            history.push(tab.route);
          }}>
          {tab.name}
        </div>

        {activeTab === tab.name && (
          <div className="row">
            <div className="d2-active-bar" />
          </div>
        )}
      </div>
    ))}
  </div>
);

export default withRouter(TopNavBar);
