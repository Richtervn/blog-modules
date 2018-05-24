import _ from 'underscore';
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Ds9799Page } from '../components';

import { AccountsManager } from './AccountsManager';
import { CharactersManager } from './CharactersManager';
import { BankingManager } from './BankingManager';
import { CreditsManager } from './CreditsManager';

import { adminPages } from './Admin.module';
const availableAdminPages = _.pluck(adminPages, 'route');

class Admin extends Component {
  componentWillMount() {
    const { pageParam, onSetPage } = this.props;
    if (!pageParam) {
      onSetPage('accounts_manager');
    } else {
      if (_.contains(availableAdminPages, pageParam)) {
        onSetPage(pageParam);
      }
    }
  }

  render() {
    const { pageParam } = this.props;
    if (!pageParam) return <Redirect to="/darksteam_97d99i/admin/accounts_manager" />;
    return (
      <Ds9799Page>
        {pageParam === 'accounts_manager' && <AccountsManager />}
        {pageParam === 'characters_manager' && <CharactersManager />}
        {pageParam === 'banking_manager' && <BankingManager />}
        {pageParam === 'credits_manager' && <CreditsManager />}
      </Ds9799Page>
    );
  }
}

export default Admin;
