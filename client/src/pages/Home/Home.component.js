import React, { Component } from 'react';

import PageContainer from 'common/PageContainer';
import { TabBar } from 'components/TopBars';

import { Projects } from './Projects';
import { AppDiary } from './AppDiary';

class Home extends Component {
  componentWillMount() {
    const { match: { params }, tabs, onSetActiveTab } = this.props;
    const { tab } = params;
    const tabSource = tabs.find(tabSrc => tabSrc.route.indexOf(tab) !== -1);
    onSetActiveTab(tabSource.name);
  }

  render() {
    const { tabs, activeTab, onSetActiveTab, match: { params } } = this.props;
    return (
      <PageContainer>
        <div className="row">
          <TabBar headers={tabs} activeTab={activeTab} onChangeTab={onSetActiveTab} />
        </div>
        <div className="row">
          {activeTab === 'Projects' && <Projects projectName={params.subPage} />}
          {activeTab === 'App Diary' && <AppDiary />}
        </div>
      </PageContainer>
    );
  }
}

export default Home;
