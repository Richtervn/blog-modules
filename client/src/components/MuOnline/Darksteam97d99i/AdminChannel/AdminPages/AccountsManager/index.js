import React, { Component } from 'react';

import AccountsList from './AccountsList';
import AccountInfo from './AccountInfo';

export default class AccountManager extends Component {
  constructor(props) {
    super(props);
    this.state = { isMakeNew: false };
    this.onMakeNew = this.onMakeNew.bind(this);
    this.onCancelNew = this.onCancelNew.bind(this);
  }

  onMakeNew() {
    this.setState({ isMakeNew: true });
  }

  onCancelNew() {
    this.setState({ isMakeNew: false });
  }

  render() {
    const {
      accounts,
      onGetAccounts,
      onSetFocusAccount,
      focusAccount,
      onEditAccount,
      onDeleteAccount,
      onAddAccount
    } = this.props;
    if (!accounts) {
      onGetAccounts();
      return null;
    }

    return (
      <div className="row no-row-margin">
        <div className="col-2 no-col-margin ds9799-acc-list-container">
          <AccountsList
            accounts={accounts}
            activeAccountId={focusAccount.memb___id}
            onSelect={onSetFocusAccount}
            onMakeNew={this.onMakeNew}
            onGetAccounts={onGetAccounts}
          />
        </div>
        <div className="col-10 no-col-margin">
          <AccountInfo
            account={focusAccount}
            onEditAccount={onEditAccount}
            onDeleteAccount={onDeleteAccount}
            onCancelNew={this.onCancelNew}
            isMakeNew={this.state.isMakeNew}          
            onAddAccount={onAddAccount}
          />
        </div>
      </div>
    );
  }
}
