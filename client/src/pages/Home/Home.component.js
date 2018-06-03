import React, { Component } from 'react';

import PageContainer from 'common/PageContainer';
import { TabBar } from 'components/TopBars';

import { Projects } from './Projects';
import { AppDiary } from './AppDiary';
import { Schelude } from './Schelude';

const homeTabs = [
  { name: 'Projects', route: '/home/projects' },
  { name: 'App Diary', route: '/home/app_diary' },
  { name: 'Schelude', route: '/home/schelude' }
];

class Home extends Component {
  componentWillMount() {
    const { match: { params }, onSetActiveTab } = this.props;
    const { tab } = params;
    const tabSource = homeTabs.find(tabSrc => tabSrc.route.indexOf(tab) !== -1);
    onSetActiveTab(tabSource.name);
  }

  render() {
    const { activeTab, onSetActiveTab, match: { params } } = this.props;
    return (
      <PageContainer>
        <div className="row">
          <TabBar headers={homeTabs} activeTab={activeTab} onChangeTab={onSetActiveTab} />
        </div>
        <div className="row">
          {activeTab === 'Projects' && <Projects projectName={params.subPage} />}
          {activeTab === 'App Diary' && <AppDiary />}
          {activeTab === 'Schelude' && <Schelude />}
        </div>
      </PageContainer>
    );
  }
}

export default Home;
