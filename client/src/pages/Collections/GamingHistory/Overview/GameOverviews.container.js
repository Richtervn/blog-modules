import { connect } from 'react-redux';
import GameOverviews from './GameOverviews.component';

import { getOverviews, setFocusOverview } from '../GamingHistory.module';

export default connect(
  ({ gamingHistory }) => ({
    overviews: gamingHistory.overviews,
    gameInfo: gamingHistory.gameInfo
  }),
  dispatch => ({
    onGetOverviews(gameId) {
      dispatch(getOverviews(gameId));
    },
    onSetFocusOverview(overview) {
      dispatch(setFocusOverview(overview));
    }
  })
)(GameOverviews);
