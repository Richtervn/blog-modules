import { connect } from 'react-redux';
import LoginForm from './LoginForm.component';

import { setUserPage, setNonRegistered } from '../Darksteam97d99i.module';
import { login } from '../User/User.module';

export default connect(
  ({ ds9799_user }) => ({
    isLoggedIn: !!ds9799_user.user
  }),
  dispatch => ({
    onSetPage(page) {
      dispatch(setUserPage(page));
    },
    onLogin(formBody) {
      dispatch(login(formBody));
    },
    onSetNonRegistered() {
      dispatch(setNonRegistered());
    }
  })
)(LoginForm);
