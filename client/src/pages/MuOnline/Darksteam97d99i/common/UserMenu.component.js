import React from 'react';
import { withRouter } from 'react-router-dom';

import LoginForm from './LoginForm.container';
import RegisterForm from './RegisterForm.container';
import ForgotPassword from './ForgotPassword.container';
import UserCard from './UserCard.container';

import { InfoHeaderCard } from 'components/Cards';
import { MenuSideBar } from 'components/SideBars';

import ServerInfoCard from './ServerInfoCard.container';
import GameSettingCard from './GameSettingCard.container';

import { userPages } from '../User/User.module';

const UserMenu = ({ activePage, onSetPage, onLogout, history, isLoggedIn, activeForm, onSetActiveForm }) => {
  if (!isLoggedIn && activeForm === 'login') {
    return [
      <LoginForm key="lg_f" />,
      <ServerInfoCard key="si_c" />,
      <InfoHeaderCard key="vi_c" label="Version Info">
        <div>
          <strong>Server serial: </strong>Darksteam97d99i+
        </div>
        <div>
          <strong>MU Server: </strong>Darksteam 97d+99i
        </div>
        <div>
          <strong>MU Server Version: </strong>Beta 40.1
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
  }

  if (!isLoggedIn && activeForm === 'register') {
    return [<RegisterForm key="rg_f" />, <GameSettingCard key="gs_c" />, <ForgotPassword key="fg_f" />];
  }

  return [
    <UserCard key="uc" />,
    <MenuSideBar
      key="um"
      menus={userPages}
      customClass="ds9799-side-nav-menu"
      activeMenu={activePage}
      onClick={menu => onSetPage(menu.route)}
      prefix="/darksteam_97d99i/user/"
    />,
    <button
      key="lg"
      className="btn btn-block btn-danger"
      onClick={() => {
        onLogout();
        history.push('/darksteam_97d99i/user/introduction');
        onSetPage('introduction');
      }}>
      Log out
    </button>
  ];
};

export default withRouter(UserMenu);
