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

class Darksteam97d99i extends Component {
  componentWillMount() {
    const {
      match: { params },
      onSetActiveTab,
      onSetUserPage,
      onSetAdminPage,
      onSetServerPage,
      onGetServerInfo,
      onGetGameSetting,
      isLoggedIn
    } = this.props;

    const { tab, page } = params;

    if (!tab && !page) {
      onSetActiveTab('user');
      onSetUserPage('login');
      onGetServerInfo();
    }

    if (tab && _.contains(availableTabs, tab)) {
      onSetActiveTab(tab);
      if (tab === 'user' && _.contains(_.pluck(userPages, 'route'), page) && isLoggedIn) {
        onSetUserPage(page);
      }
      if (tab === 'user' && _.contains(['login', 'register'], page) && !isLoggedIn) {
        onSetUserPage(page);
        if (page === 'register') {
          onGetGameSetting();
        }
      }
      if (tab === 'admin' && _.contains(_.pluck(adminPages, 'route'), page)) {
        onSetAdminPage(page);
      }
      if (tab === 'server' && _.contains(_.pluck(serverPages, 'route'), page)) {
        onSetServerPage(page);
      }
    }
  }

  componentWillReceiveProps(nextProps) {
    const { match: { params } } = nextProps;
    const { tab, page } = params;
    const {
      onSetActiveTab,
      onSetUserPage,
      onSetAdminPage,
      onSetServerPage,
      onGetServerInfo,
      onGetGameSetting
    } = this.props;

    const { isHaveServerInfo, isHaveGameSetting, isLoggedIn } = nextProps;

    if (!tab && !page) {
      onSetActiveTab('user');
      onSetUserPage('login');
      if (!isHaveServerInfo) {
        onGetServerInfo();
      }
    }

    if (tab && _.contains(availableTabs, tab)) {
      onSetActiveTab(tab);
      if (tab === 'user' && _.contains(_.pluck(userPages, 'route'), page) && isLoggedIn) {
        onSetUserPage(page);
      }
      if (tab === 'user' && _.contains(['login', 'register'], page) && !isLoggedIn) {
        if (page === 'login' && !isHaveServerInfo) {
          onGetServerInfo();
        }
        if (page === 'register' && !isHaveGameSetting) {
          onGetGameSetting();
        }
        onSetUserPage(page);
      }
      if (tab === 'admin' && _.contains(_.pluck(adminPages, 'route'), page)) {
        onSetAdminPage(page);
      }
      if (tab === 'server' && _.contains(_.pluck(serverPages, 'route'), page)) {
        onSetServerPage(page);
      }
    }
  }

  render() {
    const { match: { params: { tab } }, activeTab } = this.props;

    if (!tab) {
      return <Redirect to="/darksteam_97d99i/user/login" />;
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
            {activeTab === 'user' && <User />}
            {activeTab === 'admin' && <Admin />}
            {activeTab === 'server' && <Server />}
          </div>
        </div>
      </PageContainer>
    );
  }
}

export default Darksteam97d99i;
