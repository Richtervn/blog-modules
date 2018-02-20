import _ from 'underscore';
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import PageContainer from 'common/PageContainer';
import { PageLoader } from 'common/Loaders';

import TopNavBar from './TopNavBar.container';
import { User } from './User';
import { Admin } from './Admin';
import { Server } from './Server';

import { getSimpleName } from 'helpers';

const availableTabs = ['User', 'Admin', 'Server'];

class Darksteam97d99i extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNotFound: false
    };
  }

  componentWillMount() {
    const {
      match: { params },
      onSetActiveTab,
      onSetCurrentUserPage,
      onSetCurrentAdminPage,
      onSetCurrentServerPage,
      onGetServerInfo,
      onGetGameSetting,
      serverInfo,
      gameSetting
    } = this.props;

    const { tab, page } = params;
    if (!serverInfo) onGetServerInfo();
    if (!gameSetting) onGetGameSetting();

    if (tab) {
      const tabName = getSimpleName(tab);
      if (!_.contains(availableTabs, tabName)) {
        this.setState({ isNotFound: true });
      } else {
        onSetActiveTab(tabName);
        if (page) {
          if (tabName === 'User') {
            onSetCurrentUserPage(page);
          }
          if (tabName === 'Admin') {
            onSetCurrentAdminPage(page);
          }
          if (tabName === 'Server') {
            onSetCurrentServerPage(page);
          }
        }
      }
    }
  }

  componentWillReceiveProps(nextProps) {
    const { match: { params } } = nextProps;

    const {
      activeTab,
      onSetActiveTab,
      onSetCurrentUserPage,
      onSetCurrentAdminPage,
      onSetCurrentServerPage,
      currentUserPage,
      currentAdminPage,
      currentServerPage
    } = this.props;

    const { tab, page } = params;
    const tabName = getSimpleName(tab);

    if (tabName !== activeTab) {
      onSetActiveTab(tabName);
    }
    if (page) {
      if (tabName === 'User' && currentUserPage !== page) {
        onSetCurrentUserPage(page);
      }
      if (tabName === 'Admin' && currentAdminPage !== page) {
        onSetCurrentAdminPage(page);
      }
      if (tabName === 'Server' && currentServerPage !== page) {
        onSetCurrentServerPage(page);
      }
    }
  }

  render() {
    const { match: { params }, activeTab, serverInfo, gameSetting } = this.props;
    const { tab } = params;
    if (!tab) {
      return <Redirect to="/darksteam_97d99i/user/login" />;
    }

    if (this.state.isNotFound) {
      return <Redirect to="/404" />;
    }

    if (!serverInfo || !gameSetting) {
      return <PageLoader />;
    }

    return (
      <PageContainer backgroundUrl="/images/backgrounds/mu-elf-guardian.jpg" opacity={8}>
        <div className="container-fluid">
          <TopNavBar />
          {activeTab === 'User' && <User />}
          {activeTab === 'Admin' && <Admin />}
          {activeTab === 'Server' && <Server />}
        </div>
      </PageContainer>
    );
  }
}

export default Darksteam97d99i;
