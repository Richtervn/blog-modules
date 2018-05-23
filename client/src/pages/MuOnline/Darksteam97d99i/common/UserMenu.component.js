import React from 'react';

import LoginForm from './LoginForm.container';
import RegisterForm from './RegisterForm.container';
import ForgotPassword from './ForgotPassword.container';
import UserCard from './UserCard.container';

import { InfoHeaderCard } from 'components/Cards';
import { MenuSideBar } from 'components/SideBars';

import ServerInfoCard from './ServerInfoCard.container';
import GameSettingCard from './GameSettingCard.container';

import { userPages } from '../User/User.module';

export default ({ activePage, onSetPage, onLogout }) => {
  if (activePage === 'login') {
    return [
      <LoginForm key="lg_f" />,
      <ServerInfoCard key="si_c" />,
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
  }

  if (activePage === 'register') {
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
    <button key="lg" className="btn btn-block btn-danger" onClick={() => onLogout()}>
      Log out
    </button>
  ];
};
