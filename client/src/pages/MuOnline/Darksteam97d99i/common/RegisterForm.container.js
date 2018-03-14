import { connect } from 'react-redux';
import RegisterForm from './RegisterForm.component';

import { setUserPage } from '../Darksteam97d99i.module';
import { register } from '../User/User.module';

export default connect(
  ({ ds9799_appControl }) => ({
    gameSetting: ds9799_appControl.gameSetting,
    isRegistered: ds9799_appControl.isRegistered
  }),
  dispatch => ({
    onSetPage(page) {
      dispatch(setUserPage(page));
    },
    onRegister(formBody) {
      dispatch(register(formBody));
    }
  })
)(RegisterForm);
