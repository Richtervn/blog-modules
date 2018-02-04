import { connect } from 'react-redux';
import GameAbout from './GameAbout.component';

import { getAboutContent, editAboutContent } from '../GamingHistory.module';

export default connect(
  ({ gamingHistory }) => ({
    aboutContent: gamingHistory.aboutContent
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
