import { connect } from 'react-redux';
import GameGuideDetail from './GameGuideDetail.component';

import { getGuide, getGuides } from '../GamingHistory.module';

export default connect(
  ({ gamingHistory }) => ({ guide: gamingHistory.guideDetail, guides: gamingHistory.guides }),
  dispatch => ({
    onGetGuide(id) {
      dispatch(getGuide(id));
    },
    onGetGuides(gameId) {
      dispatch(getGuides(gameId));
    }
  })
)(GameGuideDetail);
