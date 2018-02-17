import './TopNavBar.css';
import React from 'react';
import { withRouter } from 'react-router-dom';

const tabs = [
  { name: 'Maps', route: '/starcraft_broodwar/maps' },
  { name: 'Campaigns', route: '/starcraft_broodwar/campaigns' },
  { name: 'Mods', route: '/starcraft_broodwar/mods' }
];

const TopNavBar = ({ activeTab, history, onSetActiveTab }) => (
  <div className="row">
    {tabs.map((tab, i) => (
      <div className="col-4" key={i}>
        <div
          className={`row sc-tab ${activeTab === tab.name ? 'active' : ''}`}
          onClick={() => {
            onSetActiveTab(tab.name);
            history.push(tab.route);
          }}>
          <div className="sc-border-block">
            <div className="sc-border-block-inner flex-center">{tab.name}</div>
          </div>
        </div>
      </div>
    ))}
  </div>
);

export default withRouter(TopNavBar);
