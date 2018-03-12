import { connect } from 'react-redux';
import TopNavBar from './TopNavBar.component';

import { setActiveTab } from '../Darksteam97d99i.module';

export default connect(
  ({ ds9799_appControl }) => ({
    activeTab: ds9799_appControl.activeTab,
    userPage: ds9799_appControl.userPage,
    adminPage: ds9799_appControl.adminPage,
    serverPage: ds9799_appControl.serverPage
  }),
  dispatch => ({
    onSetActiveTab(tab) {
      dispatch(setActiveTab(tab));
    }
  })
)(TopNavBar);
