import { connect } from 'react-redux';
import TopNavBar from './TopNavBar.component';

import { setActiveTab } from './Darksteam97d99i.module';

export default connect(
  ({ ds9799_appControl }) => ({
    activeTab: ds9799_appControl.activeTab,
    currentUserPage: ds9799_appControl.currentUserPage,
    currentAdminPage: ds9799_appControl.currentAdminPage,
    currentServerPage: ds9799_appControl.currentServerPage
  }),
  dispatch => ({
    onSetActiveTab(tab) {
      dispatch(setActiveTab(tab));
    }
  })
)(TopNavBar);
