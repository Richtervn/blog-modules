import React from 'react';

import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import UserMenu from './UserMenu';

export default ({
  user,
  activeForm,
  onChangeActiveForm,
  onRegister,
  onLogin,
  onLogout,
  onChangeUserPage,
  userPage
}) => (
  <div className="ds9799-user-sidenav">
    {!user &&
    activeForm == 'Login' && <LoginForm onChangeActiveForm={onChangeActiveForm} onLogin={onLogin} />}
    {!user &&
    activeForm == 'Register' && (
      <RegisterForm onChangeActiveForm={onChangeActiveForm} onRegister={onRegister} />
    )}
    {user && (
      <UserMenu user={user} onLogout={onLogout} activeItem={userPage} onSelectItem={onChangeUserPage} />
    )}
  </div>
);
