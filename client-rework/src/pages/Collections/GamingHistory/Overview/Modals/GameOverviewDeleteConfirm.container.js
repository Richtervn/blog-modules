import { connect } from 'react-redux';
import GameOverviewDeleteConfirm from './GameOverviewDeleteConfirm.component';

import { deleteOverview } from '../../GamingHistory.module';

export default connect(
  ({ gamingHistory }) => ({
    overview: gamingHistory.focusOverview
  }),
  dispatch => ({
    onDeleteOverview(id) {
      dispatch(deleteOverview(id));
    }
  })
)(GameOverviewDeleteConfirm);
