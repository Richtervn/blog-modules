import { connect } from 'react-redux';
import GamePage from './GamePage.component';

import {setActiveTab} from '../GamingHistory.module';

export default connect(
  ({ gamingHistory }) => ({ activeTab: gamingHistory.activeTab }),
  dispatch => ({
    onSetActiveTab(tabName) {
      dispatch(setActiveTab(tabName));
    }
  })
)(GamePage);
