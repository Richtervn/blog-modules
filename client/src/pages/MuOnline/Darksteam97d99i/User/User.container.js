import { connect } from 'react-redux';
import User from './User.component';

import { setUserPage } from '../Darksteam97d99i.module';

export default connect(
  ({ ds9799_appControl }) => ({
    page: ds9799_appControl.userPage
  }),
  dispatch => ({
    onSetPage(page) {
      dispatch(setUserPage(page));
    }
  })
)(User);
