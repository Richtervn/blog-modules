import { connect } from 'react-redux';
import GamingHistoryForm from './GamingHistoryForm.component';

import { addGame, editGame } from '../GamingHistory.module';

export default connect(
  ({ gamingHistory }) => ({
    game: gamingHistory.focusGame
  }),
  dispatch => ({
    onAddGame(formBody) {
      dispatch(addGame(formBody));
    },
    onEditGame(formBody) {
      dispatch(editGame(formBody));
    }
  })
)(GamingHistoryForm);
