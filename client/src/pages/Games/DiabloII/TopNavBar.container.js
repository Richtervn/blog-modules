import { connect } from 'react-redux'
import TopNavBar from './TopNavBar.component';

import { setActiveTab } from './DiabloII.module';

export default connect(
  ({ diabloII }) => ({
    activeTab: diabloII.activeTab
  }),
  dispatch => ({
    onSetActiveTab(tab) {
      dispatch(setActiveTab(tab));
    }
  })
)(TopNavBar);
