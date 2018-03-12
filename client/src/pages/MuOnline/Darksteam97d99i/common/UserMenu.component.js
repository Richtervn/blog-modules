import _ from 'underscore';
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import LoginForm from './LoginForm.container';
import RegisterForm from './RegisterForm.container';
import ForgotPassword from './ForgotPassword.container';

import { InfoHeaderCard } from 'components/Cards';

const userPages = [{ name: 'Dashboard', route: 'dashboard' }];

class UserMenu extends Component {
  componentWillReceiveProps(nextProps) {
    const { serverInfo, gameSetting, onGetServerInfo, onGetGameSetting, onSetPage } = this.props;
    const { activePage, isLoggedIn } = nextProps;
    if (!serverInfo && activePage === 'login') {
      onGetServerInfo();
    }
    if (!gameSetting && activePage === 'register') {
      onGetGameSetting();
    }
    if (isLoggedIn) {
      if (!_.contains(_.pluck(userPages, 'route'), activePage)) {
        onSetPage('dashboard');
      } else {
        onSetPage(activePage);
      }
    }
  }

  render() {
    const { activePage, serverInfo, gameSetting, isLoggedIn } = this.props;
    if (isLoggedIn) {
      if (!_.contains(_.pluck(userPages, 'route'), activePage)) {
        return <Redirect to="/darksteam_97d99i/user/dashboard" />;
      }
    }

    if (activePage === 'login') {
      if (serverInfo) {
        return [
          <LoginForm key="lg_f" />,
          <InfoHeaderCard key="si_c" label="Server Info">
            {Object.keys(serverInfo).map((key, i) => (
              <div key={i} className="info-text">
                <strong>{`${key} :`}</strong> {`${serverInfo[key].toLocaleString()}`}
              </div>
            ))}
          </InfoHeaderCard>,
          <InfoHeaderCard key="vi_c" label="Version Info">
            <div>
              <strong>Story Line: </strong>Chapter I - The Beginning
            </div>
            <div>
              <strong>MU Server: </strong>Darksteam 97d+99i
            </div>
            <div>
              <strong>MU Server Version: </strong>Beta 37.3
            </div>
            <div>
              <strong>MU Client Version: </strong>0.97.04
            </div>
            <div>
              <strong>Web App Version: </strong>2.0.0
            </div>

            <div>
              <strong>Web Server Version: </strong>2.0.0
            </div>
          </InfoHeaderCard>
        ];
      } else {
        return null;
      }
    }

    if (activePage === 'register') {
      if (gameSetting) {
        return [
          <RegisterForm key="rg_f" />,
          <InfoHeaderCard key="pr_c" label="Promotions">
            <div>
              <strong>New account rewarded : </strong>
              {`${gameSetting.NEW_REGISTER_CREDIT.toLocaleString()} Credits`}
            </div>
            <div>
              <strong>New account rewarded : </strong>
              {`${gameSetting.NEW_REGISTER_ZEN.toLocaleString()} Zen`}
            </div>
          </InfoHeaderCard>,
          <ForgotPassword key="fg_f" />
        ];
      } else {
        return null;
      }
    }

    return null;
  }
}

export default UserMenu;
