import { connect } from 'react-redux';
import Characters from './Characters.component';

import { getCharacters, setFocusCharacter } from '../MuOnline.module';

export default connect(
  ({ muOnline }) => ({
    characters: muOnline.characters
  }),
  dispatch => ({
    onGetCharacters() {
      dispatch(getCharacters());
    },
    onSetFocusCharacter(id) {
      dispatch(setFocusCharacter(id));
    }
  })
)(Characters);
