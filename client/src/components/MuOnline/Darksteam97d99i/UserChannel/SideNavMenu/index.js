import React from 'react';

import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import UserMenu from './UserMenu';
import ServerInfoCard from './ServerInfoCard';
import NewAccInfoCard from './NewAccInfoCard';

export default ({
  pages,
  user,
  activeForm,
  onChangeActiveForm,
  onRegister,
  onLogin,
  onLogout,
  onChangeUserPage,
  userPage,
  serverInfo,
  gameSetting
}) => (
  <div className="ds9799-user-sidenav">
    {!user &&
    activeForm == 'Login' && (
      <div className="ds9799-sidenav-form">
        <LoginForm onChangeActiveForm={onChangeActiveForm} onLogin={onLogin} />
        <ServerInfoCard info={serverInfo} />
      </div>
    )}
    {!user &&
    activeForm == 'Register' && (
      <div className="ds9799-sidenav-form">
        <RegisterForm onChangeActiveForm={onChangeActiveForm} onRegister={onRegister} />
        <NewAccInfoCard info={gameSetting}/>
      </div>
    )}
    {user && (
      <UserMenu pages={pages} user={user} onLogout={onLogout} activeItem={userPage} onSelectItem={onChangeUserPage} />
    )}
  </div>
);
