import { connect } from 'react-redux';
import GameGuideDetail from './GameGuideDetail.component';

import { getGuide } from '../GamingHistory.module';

export default connect(
  ({ gamingHistory }) => ({ guide: gamingHistory.guideDetail }),
  dispatch => ({
    onGetGuide(id) {
      dispatch(getGuide(id));
    }
  })
)(GameGuideDetail);
