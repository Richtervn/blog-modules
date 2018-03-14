import { connect } from 'react-redux';
import ServerMenu from './ServerMenu.component';

import { setServerPage } from '../Darksteam97d99i.module';

export default connect(
  ({ ds9799_appControl }) => ({
    activePage: ds9799_appControl.serverPage
  }),
  dispatch => ({
    onSetPage(page) {
      dispatch(setServerPage(page));
    }
  })
)(ServerMenu);
