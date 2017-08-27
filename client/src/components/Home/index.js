import React from 'react';
import TabNavBar from 'components/TabNavBar';

import Profile from 'containers/Profile';

export default () =>
  <div className="home-main-screen">
    <TabNavBar headers={['Profile', 'Projects', 'App Diary', 'Diary']} />
    <div className="tab-content">
      <div role="tabpanel" className="tab-pane active" id="tabProfile">
        <Profile/>
      </div>
      <div role="tabpanel" className="tab-pane fade" id="tabProjects">bbb</div>
      <div role="tabpanel" className="tab-pane fade" id="tabAppDiary">ccc</div>
    </div>
  </div>;
