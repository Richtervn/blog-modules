import { connect } from 'react-redux';
import Register from './Register.component';

import { setCurrentUserPage } from '../../Darksteam97d99i.module';

export default connect(
  ({ ds9799_appControl }) => ({
    gameSetting: ds9799_appControl.gameSetting
  }),
  dispatch => ({
    onSetCurrentPage(page) {
      dispatch(setCurrentUserPage(page));
    }
  })
)(Register);
