import FlashGame from 'components/FlashGame';
import { connect } from 'react-redux';

import { getGame } from 'modules/flashGame';

export default connect(
  ({ flashGame }) => ({
    Name: flashGame.Name,
    Uri: flashGame.Uri
  }),
  dispatch => ({
    getGame(Name) {
      dispatch(getGame(Name));
    }
  })
)(FlashGame);
