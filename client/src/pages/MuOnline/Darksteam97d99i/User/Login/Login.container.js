import { connect } from 'react-redux';
import Login from './Login.component';

import { setCurrentUserPage } from '../../Darksteam97d99i.module';
import { login } from '../User.module';

export default connect(
  ({ ds9799_user, ds9799_appControl }) => ({
    isLoggedIn: !!ds9799_user.user,
    serverInfo: ds9799_appControl.serverInfo
  }),
  dispatch => ({
    onSetCurrentPage(page) {
      dispatch(setCurrentUserPage(page));
    },
    onLogin(formBody) {
      dispatch(login(formBody));
    }
  })
)(Login);
