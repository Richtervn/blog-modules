import React from 'react';

import TopNavBar from './TopNavBar';
import UserChannel from './UserChannel';

// import AdminChannel from './AdminChannel';
// import ServerChannel from './ServerChannel';

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
  if (!serverInfo) {
    onGetServerInfo();
    return null;
  }

  if (!gameSetting) {
    onGetGameSetting();
    return null;
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
        {!user && errorRegister && <div className="alert alert-danger">{errorRegister}</div>}
        {!user && errorLogin && <div className="alert alert-danger">{errorLogin}</div>}
      </div>
    </div>
  );
};

//   return (
// <div className="ds9799-main-screen">
//   <div className="mo-main-screen-background">
//     <TopNavBar activeChannel={activeChannel} onChangeActiveChannel={onChangeActiveChannel} />

//         {activeChannel == 'Server' && (
//           <ServerChannel
//             page={serverPage}
//             onChangePage={onChangeServerPage}
//             data={data}
//             onGetData={onGetData}
//           />
//         )}
//         {activeChannel == 'Admin' && (
//           <AdminChannel
//             onGetAccounts={onAdminGetAccounts}
//             accounts={adminAccounts}
//             page={adminPage}
//             onChangePage={onChangeAdminPage}
//             onSetActiveAccount={onAdminSetActiveAccount}
//             focusAccount={adminActiveAccount}
//           />
//         )}

//       </div>
//     </div>
//   );
// };
