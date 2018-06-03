import { connect } from 'react-redux';
import RegisterForm from './RegisterForm.component';

import { setUserPage, setActiveForm } from '../Darksteam97d99i.module';
import { register } from '../User/User.module';

export default connect(
  ({ ds9799_appControl }) => ({
    gameSetting: ds9799_appControl.gameSetting
  }),
  dispatch => ({
    onSetPage(page) {
      dispatch(setUserPage(page));
    },
    onRegister(formBody) {
      dispatch(register(formBody));
    },
    onSetActiveForm(form){
      dispatch(setActiveForm(form));
    }
  })
)(RegisterForm);
