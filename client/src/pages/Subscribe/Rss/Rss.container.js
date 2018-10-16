import { connect } from 'react-redux';
import Rss from './Rss.component';

import { setActiveTab } from './Rss.module';

export default connect(
  ({ rss }) => ({ activeTab: rss.activeTab }),
  dispatch => ({
    onSetActiveTab(tab) {
      dispatch(setActiveTab(tab));
    }
  })
)(Rss);
