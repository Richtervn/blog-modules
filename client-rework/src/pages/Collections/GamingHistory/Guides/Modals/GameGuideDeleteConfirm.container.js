import { connect } from 'react-redux';
import GameGuideDeleteConfirm from './GameGuideDeleteConfirm.component';

import { deleteGuide } from '../../GamingHistory.module';

export default connect(
  ({ gamingHistory }) => ({
    guide: gamingHistory.focusGuide
  }),
  dispatch => ({
    onDeleteGuide(id) {
      dispatch(deleteGuide(id));
    }
  })
)(GameGuideDeleteConfirm);
