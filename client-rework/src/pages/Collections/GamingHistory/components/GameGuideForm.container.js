import { connect } from 'react-redux';
import GameGuideForm from './GameGuideForm.component';

import { addGuide, editGuide } from '../GamingHistory.module';

export default connect(
  ({ gamingHistory }) => ({
    gameInfo: gamingHistory.gameInfo,
    guide: gamingHistory.focusGuide
  }),
  dispatch => ({
    onAddGuide(formBody) {
      dispatch(addGuide(formBody));
    },
    onEditGuide(formBody) {
      dispatch(editGuide(formBody));
    }
  })
)(GameGuideForm);
