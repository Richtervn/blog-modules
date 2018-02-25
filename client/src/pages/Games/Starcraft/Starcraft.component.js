import './Starcraft.css';
import _ from 'underscore';
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import PageContainer from 'common/PageContainer';
import { getSimpleName } from 'helpers';

import TopNavBar from './TopNavBar.container';
import { Maps } from './Maps';
import { Campaigns } from './Campaigns';
import { Mods } from './Mods';

const availableTabs = ['maps', 'campaigns', 'mods'];

class Starcraft extends Component {
  componentWillMount() {
    const { match, onSetActiveTab } = this.props;
    if (!match.params.tab) {
      onSetActiveTab('Maps');
    } else {
      if (_.contains(availableTabs, match.params.tab)) {
        onSetActiveTab(getSimpleName(match.params.tab));
      }
    }
  }

  render() {
    const { match, activeTab } = this.props;

    if (!match.params.tab) {
      return <Redirect to="/starcraft_broodwar/maps" />;
    }

    if (!_.contains(availableTabs, match.params.tab)) {
      return <Redirect to="/404" />;
    }

    return (
      <PageContainer backgroundUrl="/images/backgrounds/scbw-terran.jpg">
        <div className="sc-page">
          <TopNavBar />
          {activeTab === 'Maps' && <Maps />}
          {activeTab === 'Campaigns' && <Campaigns />}
          {activeTab === 'Mods' && <Mods />}
        </div>
      </PageContainer>
    );
  }
}

export default Starcraft;
