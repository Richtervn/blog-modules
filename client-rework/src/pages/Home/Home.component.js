import './Home.css';
import React from 'react';

import PageContainer from 'common/PageContainer';
import TabNavBar from 'components/TabNavBar';

export default () => (
  <PageContainer>
    <div className="row">
      <TabNavBar
        headers={['Projects', 'Profile', 'Diary']}
        containerClass="home-tab-nav-container"
        itemClass="home-tab-nav-item"
        headerClass="home-tab-nav-header"
      />
    </div>
  </PageContainer>
);
