import { connect } from 'react-redux';
import GameGuides from './GameGuides.component';

import { getGuides, setFocusGuide } from '../GamingHistory.module';

export default connect(
  ({ gamingHistory }) => ({
    guides: gamingHistory.guides,
    gameInfo: gamingHistory.gameInfo
  }),
  dispatch => ({
    onGetGuides(gameId) {
      dispatch(getGuides(gameId));
    },
    onSetFocusGuide(guide) {
      dispatch(setFocusGuide(guide));
    }
  })
)(GameGuides);
