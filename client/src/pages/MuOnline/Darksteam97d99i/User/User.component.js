import _ from 'underscore';
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import { Ds9799Page } from '../components';
import { userPages } from './User.module';
import { ContainerLoader } from 'common/Loaders';

import { Introduction } from './Introduction';
import { Dashboard } from './Dashboard';
import { CharacterManager } from './CharacterManager';
import { BankingManager } from './BankingManager';
import { VipManager } from './VipManager';
import { WebQuest } from './WebQuest';
import { WebShop } from './WebShop';
import { Blacksmith } from './Blacksmith';
import { LuxuryShop } from './LuxuryShop';
import { UpgradeItems } from './UpgradeItems';

const availableUserPages = _.pluck(userPages, 'route');
availableUserPages.push('introduction');

class User extends Component {
  componentWillMount() {
    const { isCheckedCurrentUser, isLoggedIn, onGetCurrentUser, onSetPage, pageParam } = this.props;
    if (!isCheckedCurrentUser && !isLoggedIn) {
      onGetCurrentUser();
    }
    onSetPage(pageParam);
  }

  componentWillReceiveProps(nextProps) {
    const { onSetPage } = this.props;
    if (nextProps.pageParam !== this.props.pageParam) {
      onSetPage(nextProps.pageParam);
    }
  }

  render() {
    const { pageParam, page, isLoggedIn, isCheckedCurrentUser } = this.props;
    if (!isCheckedCurrentUser) {
      return (
        <Ds9799Page>
          <ContainerLoader />
        </Ds9799Page>
      );
    }

    if (!isLoggedIn && !pageParam && !page) {
      return <Redirect to="/darksteam_97d99i/user/introduction" />;
    }

    if (!isLoggedIn && pageParam) {
      if (!_.contains(availableUserPages, pageParam)) {
        return <Redirect to="/404" />;
      } else {
        if (page && pageParam !== page) {
          return <Redirect to={`/darksteam_97d99i/user/${pageParam}`} />;
        }
      }
    }

    if (isLoggedIn && !pageParam) {
      return <Redirect to="/darksteam_97d99i/user/dashboard" />;
    }

    return (
      <Ds9799Page>
        {pageParam === 'introduction' && <Introduction />}
        {pageParam === 'dashboard' && <Dashboard />}
        {pageParam === 'character_manager' && <CharacterManager />}
        {pageParam === 'banking_manager' && <BankingManager />}
        {pageParam === 'vip_manager' && <VipManager />}
        {pageParam === 'web_quest' && <WebQuest />}
        {pageParam === 'web_shop' && <WebShop />}
        {pageParam === 'blacksmith' && <Blacksmith />}
        {pageParam === 'luxury_shop' && <LuxuryShop />}
        {pageParam === 'upgrade_items' && <UpgradeItems />}
      </Ds9799Page>
    );
  }
}

export default User;
