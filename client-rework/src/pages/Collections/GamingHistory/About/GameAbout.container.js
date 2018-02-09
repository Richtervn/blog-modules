import { connect } from 'react-redux';
import GameAbout from './GameAbout.component';

import { getAboutContent, editAboutContent } from '../GamingHistory.module';

export default connect(
  ({ gamingHistory }) => ({
    aboutContent: gamingHistory.aboutContent,
    gameInfo: gamingHistory.gameInfo
  }),
  dispatch => ({
    onGetAboutContent(gameId) {
      dispatch(getAboutContent(gameId));
    },
    onEditAboutContent(formBody) {
      dispatch(editAboutContent(formBody));
    }
  })
)(GameAbout);
