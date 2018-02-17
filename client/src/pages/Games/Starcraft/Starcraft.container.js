import { connect } from 'react-redux';
import Starcraft from './Starcraft.component';

import { setActiveTab } from './Starcraft.module';

export default connect(
  ({ starcraft }) => ({
    activeTab: starcraft.activeTab
  }),
  dispatch => ({
    onSetActiveTab(tab) {
      dispatch(setActiveTab(tab));
    }
  })
)(Starcraft);
