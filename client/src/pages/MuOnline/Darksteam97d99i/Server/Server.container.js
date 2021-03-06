import { connect } from 'react-redux';
import Server from './Server.component';

import { setServerPage } from '../Darksteam97d99i.module';

export default connect(
  ({ ds9799_appControl }) => ({
    page: ds9799_appControl.serverPage
  }),
  dispatch => ({
    onSetPage(page) {
      dispatch(setServerPage(page));
    }
  })
)(Server);
