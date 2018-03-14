import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Ds9799Page } from '../components';

import { AccountsManager } from './AccountsManager';

class Admin extends Component {
  componentWillMount() {
    const { page, onSetPage } = this.props;
    if (!page) {
      onSetPage('accounts_manager');
    }
  }

  render() {
    const { page } = this.props;
    if (!page) return <Redirect to="/darksteam_97d99i/admin/accounts" />;
    return <Ds9799Page>{page === 'accounts_manager' && <AccountsManager />}</Ds9799Page>;
  }
}

export default Admin;
