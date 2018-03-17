import { connect } from 'react-redux';
import User from './User.component';

import { setUserPage } from '../Darksteam97d99i.module';

export default connect(
  ({ ds9799_appControl, ds9799_user }) => ({
    page: ds9799_appControl.userPage,
    isLoggedIn: !!ds9799_user.user
  }),
  dispatch => ({
    onSetPage(page) {
      dispatch(setUserPage(page));
    }
  })
)(User);
