import { connect } from 'react-redux';
import GamePage from './GamePage.component';

import { setActiveTab, setGameInfo } from '../GamingHistory.module';

export default connect(
  ({ gamingHistory }) => ({ activeTab: gamingHistory.activeTab }),
  dispatch => ({
    onSetActiveTab(tabName) {
      dispatch(setActiveTab(tabName));
    },
    onSetGameInfo(game) {
      dispatch(setGameInfo(game));
    }
  })
)(GamePage);
