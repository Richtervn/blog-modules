import { connect } from 'react-redux';
import Darksteam97d99i from './Darksteam97d99i.component';

import { setActiveTab, setUserPage, setServerPage, setAdminPage } from './Darksteam97d99i.module';

export default connect(
  ({ ds9799_appControl }) => ({
    activeTab: ds9799_appControl.activeTab
  }),
  dispatch => ({
    onSetActiveTab(tab) {
      dispatch(setActiveTab(tab));
    },
    onSetUserPage(page) {
      dispatch(setUserPage(page));
    },
    onSetServerPage(page) {
      dispatch(setServerPage(page));
    },
    onSetAdminPage(page) {
      dispatch(setAdminPage(page));
    }
  })
)(Darksteam97d99i);
