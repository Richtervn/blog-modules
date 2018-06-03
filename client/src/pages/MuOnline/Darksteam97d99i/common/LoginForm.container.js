import { connect } from 'react-redux';
import LoginForm from './LoginForm.component';

import { setActiveForm } from '../Darksteam97d99i.module';
import { login } from '../User/User.module';

export default connect(
  ({ ds9799_user }) => ({
    isLoggedIn: !!ds9799_user.user
  }),
  dispatch => ({
    onLogin(formBody) {
      dispatch(login(formBody));
    },
    onSetActiveForm(form){
      dispatch(setActiveForm(form));
    }
  })
)(LoginForm);
