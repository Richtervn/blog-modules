import { connect } from 'react-redux';
import ForgotPassword from './ForgotPassword.component';

import { recoverPassword } from '../User/User.module';

export default connect(
  ({ ds9799_user }) => ({
    lostPassword: ds9799_user.lostPassword
  }),
  dispatch => ({
    onRecoverPassword(id) {
      dispatch(recoverPassword(id));
    }
  })
)(ForgotPassword);
