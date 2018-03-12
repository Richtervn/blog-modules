import { connect } from 'react-redux';
import TopNavBar from './TopNavBar.component';

import { setActiveTab } from './Introduction.module';

export default connect(
  ({ ds9799_introduction }) => ({
    activeTab: ds9799_introduction.activeTab
  }),
  dispatch => ({
    onSetActiveTab(tab) {
      dispatch(setActiveTab(tab));
    }
  })
)(TopNavBar);
