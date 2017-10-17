import SideNavMenu from 'components/MuOnline/Darksteam97d99i/UserChannel/SideNavMenu';
import { connect } from 'react-redux';

import { changeActiveSideForm, changeUserPage } from 'modules/MuOnline/darksteam97d99i/navigator';
import { login, register, logout } from 'modules/MuOnline/darksteam97d99i/user';

export default connect(
  ({ ds9799_navigator, ds9799_user, ds9799_info }) => ({
    user: ds9799_user.user,
    pages: ds9799_navigator.userPages,
    activeForm: ds9799_navigator.activeSideForm,
    userPage: ds9799_navigator.userPage,
    serverInfo: ds9799_info.serverInfo,
    gameSetting: ds9799_info.gameSetting
  }),
  dispatch => ({
    onChangeActiveForm(form) {
      dispatch(changeActiveSideForm(form));
    },
    onRegister(formBody) {
      dispatch(register(formBody));
    },
    onLogin(formBody) {
      dispatch(login(formBody));
    },
    onLogout() {
      dispatch(logout());
    },
    onChangeUserPage(page) {
      dispatch(changeUserPage(page));
    }
  })
)(SideNavMenu);
