import React, { Component } from 'react';
import { TabBar } from 'components/TopBars';
import PageContainer from 'common/PageContainer';
import { getSimpleName } from 'helpers';

import { GameAbout } from './About';
import { GameGuides } from './Guides';
import { GameOverviews } from './Overview';

const availableTabs = ['about', 'guides', 'overview'];

class GamePage extends Component {
  componentWillMount() {
    const { params, onSetActiveTab, onSetGameInfo, gameInfo } = this.props;
    const { game, tab } = params;
    this.tabs = availableTabs.map(tabKey => ({
      name: getSimpleName(tabKey),
      route: `/gaming_history/${game}/${tabKey}`
    }));
    onSetActiveTab(getSimpleName(tab));
    onSetGameInfo(gameInfo);
  }

  render() {
    const { activeTab, onSetActiveTab, params } = this.props;
    return (
      <PageContainer backgroundUrl={`/images/backgrounds/${params.game}.jpg`} opacity={5}>
        <TabBar headers={this.tabs} activeTab={activeTab} onChangeTab={onSetActiveTab} />
        {activeTab === 'About' && <GameAbout />}
        {activeTab === 'Guides' && <GameGuides params={params} />}
        {activeTab === 'Overview' && <GameOverviews params={params} />}
      </PageContainer>
    );
  }
}

export default GamePage;
