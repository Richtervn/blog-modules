import { connect } from 'react-redux';
import UserMenu from './UserMenu.component';

import { setUserPage, setActiveForm } from '../Darksteam97d99i.module';
import { logout } from '../User/User.module';

export default connect(
  ({ ds9799_appControl, ds9799_user }) => ({
    activePage: ds9799_appControl.userPage,
    isLoggedIn: !!ds9799_user.user,
    activeForm: ds9799_appControl.activeForm
  }),
  dispatch => ({
    onSetPage(page) {
      dispatch(setUserPage(page));
    },
    onSetActiveForm(form) {
      dispatch(setActiveForm(form));
    },
    onLogout() {
      dispatch(logout());
    }
  })
)(UserMenu);
