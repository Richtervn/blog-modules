import './Darksteam97d99i.theme.css';
import _ from 'underscore';
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import PageContainer from 'common/PageContainer';

import { TopNavBar, SideNavBar } from './common';
import { User } from './User';
import { Admin } from './Admin';
import { Server } from './Server';

const availableTabs = ['user', 'admin', 'server'];

class Darksteam97d99i extends Component {
  componentWillMount() {
    const { match: { params }, onSetActiveTab, onSetUserPage, onSetAdminPage, onSetServerPage } = this.props;
    if (!params.tab) {
      onSetActiveTab('user');
    } else {
      if (_.contains(availableTabs, params.tab)) {
        onSetActiveTab(params.tab);
        if (params.page && params.tab === 'user') onSetUserPage(params.page);
        if (params.page && params.tab === 'admin') onSetAdminPage(params.page);
        if (params.page && params.tab === 'server') onSetServerPage(params.page);
      }
    }
  }

  render() {
    const { match: { params }, activeTab } = this.props;
    if (!params.tab) {
      return <Redirect to="/darksteam_97d99i/user" />;
    }

    if (params.tab && !_.contains(availableTabs, params.tab)) {
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
