import './DiabloII.css';
import _ from 'underscore';
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import PageContainer from 'common/PageContainer';
import { getFullName } from 'helpers';

import TopNavBar from './TopNavBar.container';
import { Mods } from './Mods';

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
    return (
      <PageContainer backgroundUrl="/images/backgrounds/doom-castle.jpg" opacity={6}>
        <div className="container-fluid">
          <TopNavBar />
          {activeTab === 'Mods' && <Mods />}
        </div>
      </PageContainer>
    );
  }
}

export default DiabloII;
