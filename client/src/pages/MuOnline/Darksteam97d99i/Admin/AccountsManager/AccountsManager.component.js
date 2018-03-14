import './AccountsManager.css';
import React, { Component } from 'react';
import { ColLoader } from 'common/Loaders';

class AccountsManager extends Component {
  componentWillMount() {
    this.props.onGetAccounts();
  }

  render() {
    const { accounts } = this.props;
    if (!accounts) {
      return <ColLoader />;
    }
    return <div className="ds9799-accounts-manager">.</div>;
  }
}

export default AccountsManager;
