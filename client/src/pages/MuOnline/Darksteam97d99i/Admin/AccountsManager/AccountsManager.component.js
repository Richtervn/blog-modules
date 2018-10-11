import './AccountsManager.css';
import React, { Component } from 'react';
import classNames from 'classnames';

import { ColLoader } from 'common/Loaders';
import { SearchInput } from 'components/Inputs';

import AccountForm from './AccountForm.container';

class AccountsManager extends Component {
  constructor(props) {
    super(props);
    const { accounts, detailLoaded } = this.props;
    this.state = {
      didLoaded: !!accounts && !!detailLoaded,
      value: ''
    };
  }

  componentWillMount() {
    this.props.onGetAccounts();
  }

  componentWillReceiveProps(nextProps) {
    if (!this.props.accounts && nextProps.accounts) {
      this.props.onGetAccountDetail(nextProps.accounts[0].memb___id);
      this.setState({ didLoaded: true });
    }
  }

  render() {
    const { accounts, focusAccount, onGetAccountDetail, onClearAccountDetail, onSearch } = this.props;
    if (!this.state.didLoaded) {
      return <ColLoader />;
    }
    return (
      <div id="ds9799-accounts-manager">
        <div className="side-bar">
          <div className="search-wrapper">
            <SearchInput
              customClass="ds9799-search-box"
              value={this.state.value}
              onChange={e => {
                this.setState({ value: e.target.value });
                onSearch(e.target.value);
              }}
            />
          </div>
          <div className="list-accounts">
            {accounts.map(acc => (
              <div
                className={classNames('account-card', { active: acc.memb___id === focusAccount })}
                key={acc.memb___id}
                onClick={() => onGetAccountDetail(acc.memb___id)}>
                {acc.memb___id}
              </div>
            ))}
            <div className="add-account-btn" onClick={() => onClearAccountDetail()}>
              <i className="fa fa-plus-circle" />
            </div>
          </div>
        </div>
        <div className="main-view">
          <AccountForm />
        </div>
      </div>
    );
  }
}

export default AccountsManager;
