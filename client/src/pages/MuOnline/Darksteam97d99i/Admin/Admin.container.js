import { connect } from 'react-redux';
import Admin from './Admin.component';

import { setAdminPage } from '../Darksteam97d99i.module';

export default connect(
  ({ ds9799_appControl }) => ({
    page: ds9799_appControl.adminPage
  }),
  dispatch => ({
    onSetPage(page) {
      dispatch(setAdminPage(page));
    }
  })
)(Admin);
