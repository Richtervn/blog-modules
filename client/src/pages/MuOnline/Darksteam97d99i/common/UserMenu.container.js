import { connect } from 'react-redux';
import UserMenu from './UserMenu.component';

import { setUserPage } from '../Darksteam97d99i.module';

export default connect(
  ({ ds9799_appControl, ds9799_user }) => ({
    activePage: ds9799_appControl.userPage,
    serverInfo: ds9799_appControl.serverInfo,
    gameSetting: ds9799_appControl.gameSetting,
    isLoggedIn: !!ds9799_user.user
  }),
  dispatch => ({
    onSetPage(page) {
      dispatch(setUserPage(page));
    }
  })
)(UserMenu);
