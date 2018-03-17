import React from 'react';

import LoginForm from './LoginForm.container';
import RegisterForm from './RegisterForm.container';
import ForgotPassword from './ForgotPassword.container';
import UserCard from './UserCard.container';

import { InfoHeaderCard } from 'components/Cards';
import { MenuSideBar } from 'components/SideBars';

import { userPages } from '../Darksteam97d99i.module';

export default ({ activePage, serverInfo, gameSetting, onSetPage, isLoggedIn }) => {
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

  if (!isLoggedIn) {
    return null;
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
    <button key="lg" className="btn btn-block btn-danger">
      Log out
    </button>
  ];
};

