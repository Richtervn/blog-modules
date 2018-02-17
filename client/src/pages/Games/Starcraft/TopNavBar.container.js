import { connect } from 'react-redux';
import TopNavBar from './TopNavBar.component';

import { setActiveTab } from './Starcraft.module';

export default connect(
  ({ starcraft }) => ({
    activeTab: starcraft.activeTab
  }),
  dispatch => ({
    onSetActiveTab(name) {
      dispatch(setActiveTab(name));
    }
  })
)(TopNavBar);
