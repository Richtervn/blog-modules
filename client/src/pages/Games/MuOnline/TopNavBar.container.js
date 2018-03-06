import TopNavBar from './TopNavBar.component';
import { connect } from 'react-redux';

import { setActiveTab } from './MuOnline.module';

export default connect(
  ({ muOnline }) => ({
    activeTab: muOnline.activeTab
  }),
  dispatch => ({
    onSetActiveTab(tab) {
      dispatch(setActiveTab(tab));
    }
  })
)(TopNavBar);
