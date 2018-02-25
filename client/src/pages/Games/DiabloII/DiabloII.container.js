import { connect } from 'react-redux';
import DiabloII from './DiabloII.component';

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
)(DiabloII);
