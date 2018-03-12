import { connect } from 'react-redux';
import LoginForm from './LoginForm.component';

import { setUserPage } from '../Darksteam97d99i.module';
import { login } from '../User/User.module';

export default connect(null, dispatch => ({
  onSetPage(page) {
    dispatch(setUserPage(page));
  },
  onLogin(formBody) {
    dispatch(login(formBody));
  }
}))(LoginForm);
