import './Home.css';
import React from 'react';

import PageContainer from 'common/PageContainer';
import TabNavBar from 'components/TabNavBar';

import { Projects } from './Projects';

export default ({ tabs, activeTab, onSetActiveTab }) => (
  <PageContainer>
    <div className="row">
      <TabNavBar
        headers={tabs}
        activeTab={activeTab}
        onChangeTab={onSetActiveTab}
        containerClass="home-tab-nav-container"
        itemClass="home-tab-nav-item"
        headerClass="home-tab-nav-header"
      />
    </div>
    <div className="row">{activeTab === 'Projects' && <Projects />}</div>
  </PageContainer>
);
