import React from 'react';

import TopNavBar from './TopNavBar';
import UserChannel from './UserChannel';

export default ({
  user,
  activeChannel,
  onChangeActiveChannel,
  activeSideForm,
  onChangeActiveSideForm,
  onRegister,
  onLogin,
  errorRegister,
  errorLogin,
  userPage,
  onLogout,
  onEditProfile
}) => (
  <div className="ds9799-main-screen">
    <div className="mo-main-screen-background">
      <TopNavBar activeChannel={activeChannel} onChangeActiveChannel={onChangeActiveChannel} />
      {activeChannel == 'User' && (
        <UserChannel
          activeSideForm={activeSideForm}
          onChangeActiveSideForm={onChangeActiveSideForm}
          onRegister={onRegister}
          onLogin={onLogin}
          user={user}
          userPage={userPage}
          onLogout={onLogout}
          onEditProfile={onEditProfile}
        />
      )}
      {!user && errorRegister && <div className="alert alert-danger">{errorRegister}</div>}
      {!user && errorLogin && <div className="alert alert-danger">{errorLogin}</div>}
    </div>
  </div>
);
