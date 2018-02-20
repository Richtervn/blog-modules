import { connect } from 'react-redux';
import User from './User.component';

import { setCurrentUserPage } from '../Darksteam97d99i.module';

export default connect(
  ({ ds9799_appControl }) => ({
    currentPage: ds9799_appControl.currentUserPage
  }),
  dispatch => ({
    onSetCurrentPage(page) {
      dispatch(setCurrentUserPage(page));
    }
  })
)(User);
