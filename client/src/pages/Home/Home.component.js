import React, { useEffect } from 'react';

import PageContainer from 'common/PageContainer';
import { TabBar } from 'components/TopBars';

import { Projects } from './Projects';
import { AppDiary } from './AppDiary';
import { Schelude } from './Schelude';

const homeTabs = [
  { name: 'Dashboard', route: '/home/dashboard' },
  { name: 'Schelude', route: '/home/schelude' },
  { name: 'Weather', route: '/home/weather' },
  { name: 'Projects', route: '/home/projects' },
  { name: 'App Diary', route: '/home/app_diary' }
];

export default ({ match, onSetActiveTab, activeTab }) => {
  useEffect(() => {
    const tab = match.params.tab;
    const tabSource = homeTabs.find(tabSrc => tabSrc.route.indexOf(tab) !== -1);
    onSetActiveTab(tabSource.name);
  }, [match]);

  return (
    <PageContainer>
      <div className="row">
        <TabBar headers={homeTabs} activeTab={activeTab} onChangeTab={onSetActiveTab} />
      </div>
      <div className="row">
        {activeTab === 'Projects' && <Projects projectName={match.params.subPage} />}
        {activeTab === 'App Diary' && <AppDiary />}
        {activeTab === 'Schelude' && <Schelude />}
      </div>
    </PageContainer>
  );
};
