import React from 'react';

import SideNavMenu from './SideNavMenu';
import UserPages from './UserPages';

export default ({
  user,
  characters,
  focusCharacter,
  userPage,
  activeSideForm,
  onChangeActiveSideForm,
  onRegister,
  onLogin,
  onLogout,
  onEditProfile,
  onChangeUserPage,
  onSetFocusCharacter,
  onGetCharacters,
  onAddPoint,
  errorAddPoint
}) => (
  <div className="row no-row-margin">
    <div className="col-3 no-col-margin">
      <SideNavMenu
        user={user}
        activeForm={activeSideForm}
        onChangeActiveForm={onChangeActiveSideForm}
        onRegister={onRegister}
        onLogin={onLogin}
        onLogout={onLogout}
        onChangeUserPage={onChangeUserPage}
        userPage={userPage}
      />
    </div>
    <div className="col-9 no-col-margin">
      <UserPages
        user={user}
        page={userPage}
        onEditProfile={onEditProfile}
        onSetFocusCharacter={onSetFocusCharacter}
        onGetCharacters={onGetCharacters}
        characters={characters}
        focusCharacter={focusCharacter}
        onAddPoint={onAddPoint}
        errorAddPoint={errorAddPoint}
      />
    </div>
  </div>
);
