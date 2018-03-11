import './MuOnline.css';
import './MuOnline.theme.css';
import _ from 'underscore';
import React, { Component } from 'react';

import PageContainer from 'common/PageContainer';
import { Redirect } from 'react-router-dom';
import { getSimpleName } from 'helpers';

import TopNavBar from './TopNavBar.container';
import { Versions } from './Versions';
import { Tools } from './Tools';
import { Guides } from './Guides';
import { Characters } from './Characters';

class MuOnline extends Component {
  componentWillMount() {
    const { match: { params }, onSetActiveTab } = this.props;
    if (params.tab) {
      onSetActiveTab(getSimpleName(params.tab));
    }
    if (!params.tab) {
      onSetActiveTab('Versions');
    }
  }

  render() {
    const { activeTab, match: { params } } = this.props;

    if (!params.tab) {
      return <Redirect to="/mu_online/versions" />;
    }
    if (params.tab && !_.contains(['versions', 'tools', 'characters', 'guides'], params.tab)) {
      return <Redirect to="/404" />;
    }
    return (
      <PageContainer backgroundUrl="/images/backgrounds/mg_mu.jpg" opacity={6}>
        <TopNavBar />
        <div className="container-fluid">
          {activeTab === 'Versions' && <Versions id={params.subPage} />}
          {activeTab === 'Tools' && <Tools />}
          {activeTab === 'Guides' && <Guides id={params.subPage} />}
          {activeTab === 'Characters' && <Characters />}
        </div>
      </PageContainer>
    );
  }
}

export default MuOnline;
