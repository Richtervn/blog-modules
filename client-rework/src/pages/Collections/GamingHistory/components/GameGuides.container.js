import { connect } from 'react-redux';
import GameGuides from './GameGuides.component';

import { getGuides, setFocusGuide } from '../GamingHistory.module';

export default connect(
  ({ gamingHistory }) => ({
    guides: gamingHistory.guides
  }),
  dispatch => ({
    onGetGuides() {
      dispatch(getGuides());
    },
    onSetFocusGuide(guide) {
      dispatch(setFocusGuide(guide));
    }
  })
)(GameGuides);
