import './Darksteam97d99i.theme.css';
import _ from 'underscore';
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import PageContainer from 'common/PageContainer';

import { TopNavBar, SideNavBar } from './common';
import { User } from './User';
import { Admin } from './Admin';
import { Server } from './Server';

import { userPages, adminPages, serverPages } from './Darksteam97d99i.module';

const availableTabs = ['user', 'admin', 'server'];
const availableUserPages = _.pluck(userPages, 'route');
const availableAdminPages = _.pluck(adminPages, 'route');
const availableServerPages = _.pluck(serverPages, 'route');

class Darksteam97d99i extends Component {
  componentWillMount() {
    const { match: { params }, onSetActiveTab } = this.props;
    const { tab } = params;
    if (!tab) {
      onSetActiveTab('user');
    }
    if (tab && _.contains(availableTabs, tab)) {
      onSetActiveTab(tab);
    }
  }

  componentWillReceiveProps(nextProps) {
    const { activeTab, onSetActiveTab } = this.props;
    const { match: { params } } = nextProps;
    const { tab } = params;
    if (tab && tab !== activeTab) {
      onSetActiveTab(tab);
    }
  }

  render() {
    const { match: { params: { tab, page } }, activeTab } = this.props;

    if (!tab) {
      return <Redirect to="/darksteam_97d99i/user" />;
    }

    if (!_.contains(availableTabs, tab)) {
      return <Redirect to="/404" />;
    }

    return (
      <PageContainer backgroundUrl="/images/backgrounds/mu-elf-guardian.jpg" opacity={8}>
        <div className="container-fluid">
          <TopNavBar />
          <div className="row">
            <SideNavBar />
            {activeTab === 'user' && <User pageParam={page} />}
            {activeTab === 'admin' && <Admin pageParam={page} />}
            {activeTab === 'server' && <Server pageParam={page} />}
          </div>
        </div>
      </PageContainer>
    );
  }
}

export default Darksteam97d99i;
