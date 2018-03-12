import { connect } from 'react-redux';
import RegisterForm from './RegisterForm.component';

import { setUserPage } from '../Darksteam97d99i.module';

export default connect(
  ({ ds9799_appControl }) => ({
    gameSetting: ds9799_appControl.gameSetting
  }),
  dispatch => ({
    onSetPage(page) {
      dispatch(setUserPage(page));
    }
  })
)(RegisterForm);
