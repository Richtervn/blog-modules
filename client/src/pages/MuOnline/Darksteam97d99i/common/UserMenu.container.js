import { connect } from 'react-redux';
import UserMenu from './UserMenu.component';

import { setUserPage } from '../Darksteam97d99i.module';

export default connect(
  ({ ds9799_appControl }) => ({
    activePage: ds9799_appControl.userPage
  }),
  dispatch => ({
    onSetPage(page) {
      dispatch(setUserPage(page));
    }
  })
)(UserMenu);
