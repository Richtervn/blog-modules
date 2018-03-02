import './DiabloII.css';
import _ from 'underscore';
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import PageContainer from 'common/PageContainer';
import { getFullName } from 'helpers';

import TopNavBar from './TopNavBar.container';
import { Mods } from './Mods';
import { Tools } from './Tools';
import { Characters } from './Characters';
import { SurvivalKits } from './SurvivalKits';

const availableTabs = ['mods', 'characters', 'survival_kits', 'tools', 'extra'];

class DiabloII extends Component {
  componentWillMount() {
    const { match, onSetActiveTab } = this.props;
    if (!match.params.tab) {
      onSetActiveTab('Mods');
    } else {
      if (_.contains(availableTabs, match.params.tab)) {
        onSetActiveTab(getFullName(match.params.tab));
      }
    }
  }

  render() {
    const { match, activeTab } = this.props;
    if (!match.params.tab) {
      return <Redirect to="/diablo_ii/mods" />;
    }
    if (!_.contains(availableTabs, match.params.tab)) {
      return <Redirect to="/404" />;
    }
    return (
      <PageContainer backgroundUrl="/images/backgrounds/doom-castle.jpg" opacity={6}>
        <div className="container-fluid">
          <TopNavBar />
          {activeTab === 'Mods' && <Mods />}
          {activeTab === 'Tools' && <Tools />}
          {activeTab === 'Characters' && <Characters />}
          {activeTab === 'Survival Kits' && <SurvivalKits />}
        </div>
      </PageContainer>
    );
  }
}

export default DiabloII;
