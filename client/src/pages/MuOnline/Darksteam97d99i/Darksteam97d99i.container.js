import { connect } from 'react-redux';
import Darksteam97d99i from './Darksteam97d99i.component';

import { setActiveTab } from './Darksteam97d99i.module';

export default connect(
  ({ ds9799_appControl }) => ({
    activeTab: ds9799_appControl.activeTab
  }),
  dispatch => ({
    onSetActiveTab(tab) {
      dispatch(setActiveTab(tab));
    }
  })
)(Darksteam97d99i);

// import {
//   setActiveTab,
//   getServerInfo,
//   getGameSetting,
//   setCurrentServerPage,
//   setCurrentUserPage,
//   setCurrentAdminPage
// } from './Darksteam97d99i.module';

// export default connect(
//   ({ ds9799_appControl }) => ({
//     activeTab: ds9799_appControl.activeTab,
//     serverInfo: ds9799_appControl.serverInfo,
//     gameSetting: ds9799_appControl.gameSetting,
//     currentUserPage: ds9799_appControl.currentUserPage,
//     currentAdminPage: ds9799_appControl.currentAdminPage,
//     currentServerPage: ds9799_appControl.currentServerPage
//   }),
//   dispatch => ({
//     onSetActiveTab(tab) {
//       dispatch(setActiveTab(tab));
//     },
//     onGetServerInfo() {
//       dispatch(getServerInfo());
//     },
//     onGetGameSetting() {
//       dispatch(getGameSetting());
//     },
//     onSetCurrentServerPage(page) {
//       dispatch(setCurrentServerPage(page));
//     },
//     onSetCurrentUserPage(page) {
//       dispatch(setCurrentUserPage(page));
//     },
//     onSetCurrentAdminPage(page) {
//       dispatch(setCurrentAdminPage(page));
//     }
//   })
// )(Darksteam97d99i);
