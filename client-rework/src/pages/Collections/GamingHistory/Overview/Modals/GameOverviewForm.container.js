import { connect } from 'react-redux';
import GameOverviewForm from './GameOverviewForm.component';

import { addOverview, editOverview } from '../../GamingHistory.module';

export default connect(
  ({ gamingHistory }) => ({
    gameInfo: gamingHistory.gameInfo,
    overview: gamingHistory.focusOverview
  }),
  dispatch => ({
    onAddOverview(formBody) {
      dispatch(addOverview(formBody));
    },
    onEditOverview(formBody) {
      dispatch(editOverview(formBody));
    }
  })
)(GameOverviewForm);
