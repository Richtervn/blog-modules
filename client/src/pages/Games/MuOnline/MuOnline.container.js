import { connect } from 'react-redux';
import MuOnline from './MuOnline.component';

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
)(MuOnline);

