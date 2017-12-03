import React from 'react';

import TopNavBar from './TopNavBar';
import UserChannel from './UserChannel';
import AdminChannel from './AdminChannel';
import ServerChannel from './ServerChannel';

import LoadingScreen from 'components/LoadingScreen';

export default ({
  user,
  channels,
  activeChannel,
  serverInfo,
  gameSetting,
  onChangeActiveChannel,
  onGetServerInfo,
  onGetGameSetting,
  errorRegister,
  errorLogin
}) => {
  if (!serverInfo) onGetServerInfo();
  if (!gameSetting) onGetGameSetting();
  if (!serverInfo && !gameSetting) {
    return <LoadingScreen />;
  }
  return (
    <div className="ds9799-main-screen">
      <div className="mo-main-screen-background">
        <TopNavBar
          channels={channels}
          activeChannel={activeChannel}
          onChangeActiveChannel={onChangeActiveChannel}
        />
        {activeChannel == 'User' && <UserChannel />}
        {activeChannel == 'Admin' && <AdminChannel />}
        {activeChannel == 'Server' && <ServerChannel />}
        {!user && errorRegister && <div className="alert alert-danger">{errorRegister}</div>}
        {!user && errorLogin && <div className="alert alert-danger">{errorLogin}</div>}
      </div>
    </div>
  );
};
