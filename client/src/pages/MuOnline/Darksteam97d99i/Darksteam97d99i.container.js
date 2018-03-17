import { connect } from 'react-redux';
import Darksteam97d99i from './Darksteam97d99i.component';

import {
  setActiveTab,
  setUserPage,
  setServerPage,
  setAdminPage,
  getServerInfo,
  getGameSetting
} from './Darksteam97d99i.module';

export default connect(
  ({ ds9799_appControl, ds9799_user }) => ({
    activeTab: ds9799_appControl.activeTab,
    isLoggedIn: !!ds9799_user.user,
    userPage: ds9799_appControl.userPage,
    adminPage: ds9799_appControl.adminPage,
    serverPage: ds9799_appControl.serverPage
  }),
  dispatch => ({
    onSetActiveTab(tab) {
      dispatch(setActiveTab(tab));
    },
    onSetUserPage(page) {
      dispatch(setUserPage(page));
    },
    onSetServerPage(page) {
      dispatch(setServerPage(page));
    },
    onSetAdminPage(page) {
      dispatch(setAdminPage(page));
    },
    onGetServerInfo() {
      dispatch(getServerInfo());
    },
    onGetGameSetting() {
      dispatch(getGameSetting());
    }
  })
)(Darksteam97d99i);
