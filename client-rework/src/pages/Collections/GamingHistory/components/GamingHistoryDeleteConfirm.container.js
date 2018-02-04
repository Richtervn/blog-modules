import { connect } from 'react-redux';
import GamingHistoryDeleteConfirm from './GamingHistoryDeleteConfirm.component';

import { deleteGame } from '../GamingHistory.module';

export default connect(
  ({ gamingHistory }) => ({
    game: gamingHistory.focusGame
  }),
  dispatch => ({
    onDeleteGame(id) {
      dispatch(deleteGame(id));
    }
  })
)(GamingHistoryDeleteConfirm);
