import './AccountCard.css';
import React, { Component } from 'react';
import classnames from 'classnames';

import { openModal } from 'common/Modal';
import { regexp } from 'helpers';

class AccountCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLocked: true
    };
  }

  handleClick() {
    if (this.state.isLocked) {
      this.setState({ isLocked: false });
      return;
    }
    this.props.onSetFocus(this.props.account._id);
    openModal('EditAccount');
  }

  render() {
    const { account } = this.props;
    const { isLocked } = this.state;
    return (
      <div className="col-3">
        <div className="row">
          <div
            className="account-card"
            onClick={() => this.handleClick()}
            style={{ border: `solid 1px ${account.Color}` }}>
            <div className="header" style={{ borderBottom: `solid 1px ${account.Color}`, background: account.Color }}>
              <div className="favicon-container">
                <img className="site-favicon" src={account.Icon} alt={account.SiteName} />
              </div>
              <div className="site-name">{account.SiteName}</div>
            </div>
            <div className={classnames('content', { locked: isLocked })}>
              {isLocked && <i className="fa fa-lock fa-4x lock" />}
              {isLocked && <i className="fa fa-unlock-alt fa-4x unlock" />}
              {!isLocked && (
                <div>
                  {account.Username && (
                    <div className="info-row">
                      <div className="label">{regexp.email.test(account.Username) ? 'Email' : 'Username'}:</div>
                      <div className="info">{account.Username}</div>
                    </div>
                  )}
                  {account.Password && (
                    <div className="info-row">
                      <div className="label">Password:</div>
                      <div className="info">{account.Password}</div>
                    </div>
                  )}
                  {account.LogInMethod && (
                    <div className="info-row">
                      <div className="label">Method:</div>
                      <div className="info">{account.LogInMethod}</div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AccountCard;
