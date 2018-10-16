import React, { Component } from 'react';

import PageContainer from 'common/PageContainer';
import { TabBar } from 'components/TopBars';

import { Feeds } from './Feeds';
import { Providers } from './Providers';

const rssTabs = [{ name: 'Feeds', route: '/rss/feeds' }, { name: 'Providers', route: '/rss/providers' }];

class Rss extends Component {
  componentWillMount() {
    const { match: { params }, onSetActiveTab } = this.props;
    const { tab } = params;
    const tabSource = rssTabs.find(tabSrc => tabSrc.route.indexOf(tab) !== -1);
    onSetActiveTab(tabSource.name);
  }

  render() {
    const { activeTab, onSetActiveTab } = this.props;
    return (
      <PageContainer>
        <div className="row">
          <TabBar headers={rssTabs} activeTab={activeTab} onChangeTab={onSetActiveTab} />
        </div>
        <div className="row">
          {activeTab === 'Feeds' && <Feeds />}
          {activeTab === 'Providers' && <Providers />}
        </div>
      </PageContainer>
    );
  }
}

export default Rss;
