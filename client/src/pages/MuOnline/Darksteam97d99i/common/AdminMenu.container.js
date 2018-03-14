import { connect } from 'react-redux';
import AdminMenu from './AdminMenu.component';

import { setAdminPage } from '../Darksteam97d99i.module';

export default connect(
  ({ ds9799_appControl }) => ({
    activePage: ds9799_appControl.adminPage
  }),
  dispatch => ({
    onSetPage(page) {
      dispatch(setAdminPage(page));
    }
  })
)(AdminMenu);
