import React, { Component } from 'react';
import TabNavBar from 'components/TabNavBar';
import PageContainer from 'common/PageContainer';

import GameAbout from './GameAbout.container';
import GameGuides from './GameGuides.container';
import GameOverviews from './GameOverviews.container';

const availableTabs = ['about', 'guides', 'overview'];
const getTabName = tabKey => {
  return tabKey.charAt(0).toUpperCase() + tabKey.slice(1, tabKey.length);
};

class GamePage extends Component {
  componentWillMount() {
    const { params, onSetActiveTab, onSetGameInfo, gameInfo } = this.props;
    const { game, tab } = params;
    this.tabs = availableTabs.map(tabKey => ({
      name: getTabName(tabKey),
      route: `/gaming_history/${game}/${tabKey}`
    }));
    onSetActiveTab(getTabName(tab));
    onSetGameInfo(gameInfo);
  }

  render() {
    const { activeTab, onSetActiveTab, params } = this.props;
    return (
      <PageContainer backgroundUrl={`/images/backgrounds/${params.game}.jpg`} opacity={5}>
        <TabNavBar
          headers={this.tabs}
          activeTab={activeTab}
          onChangeTab={onSetActiveTab}
          containerClass="home-tab-nav-container"
          itemClass="home-tab-nav-item"
          headerClass="home-tab-nav-header"
        />
        {activeTab === 'About' && <GameAbout />}
        {activeTab === 'Guides' && <GameGuides params={params} />}
        {activeTab === 'Overview' && <GameOverviews params={params} />}
      </PageContainer>
    );
  }
}

export default GamePage;
