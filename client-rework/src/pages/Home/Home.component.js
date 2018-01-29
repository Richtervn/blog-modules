import './Home.css';
import React, { Component } from 'react';

import PageContainer from 'common/PageContainer';
import TabNavBar from 'components/TabNavBar';

import { Projects } from './Projects';

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
          <TabNavBar
            headers={tabs}
            activeTab={activeTab}
            onChangeTab={onSetActiveTab}
            containerClass="home-tab-nav-container"
            itemClass="home-tab-nav-item"
            headerClass="home-tab-nav-header"
          />
        </div>
        <div className="row">
          {activeTab === 'Projects' && <Projects projectName={params.subPage} />}
          {activeTab === 'App Diary' && <div>dcm</div>}
        </div>
      </PageContainer>
    );
  }
}

export default Home;
