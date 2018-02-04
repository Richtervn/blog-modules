import React, { Component } from 'react';
import TabNavBar from 'components/TabNavBar';
import PageContainer from 'common/PageContainer';

import GameAbout from './GameAbout.container';

const availableTabs = ['about', 'guides', 'overview'];
const getTabName = tabKey => {
  return tabKey.charAt(0).toUpperCase() + tabKey.slice(1, tabKey.length);
};

class GamePage extends Component {
  componentWillMount() {
    const { params, onSetActiveTab } = this.props;
    const { game, tab } = params;
    this.tabs = availableTabs.map(tabKey => ({
      name: getTabName(tabKey),
      route: `/gaming_history/${game}/${tabKey}`
    }));
    onSetActiveTab(getTabName(tab));
  }

  render() {
    const { activeTab, onSetActiveTab, params, gameInfo } = this.props;
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

        {activeTab === 'About' && <GameAbout gameInfo={gameInfo}/>}
      </PageContainer>
    );
  }
}

export default GamePage;
