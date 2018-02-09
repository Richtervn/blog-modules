import { connect } from 'react-redux';
import GameOverviews from './GameOverviews.component';

import { getOverviews, setFocusOverview } from '../GamingHistory.module';

export default connect(
  ({ gamingHistory }) => ({
    overviews: gamingHistory.overviews
  }),
  dispatch => ({
    onGetOverviews() {
      dispatch(getOverviews());
    },
    onSetFocusOverview(overview) {
      dispatch(setFocusOverview(overview));
    }
  })
)(GameOverviews);
