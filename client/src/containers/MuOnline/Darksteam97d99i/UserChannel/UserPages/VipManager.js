import VipManager from 'components/MuOnline/Darksteam97d99i/UserChannel/UserPages/VipManager';
import { connect } from 'react-redux';

import { getCharacters, setFocusCharacter } from 'modules/MuOnline/darksteam97d99i/character';

export default connect(
  ({ ds9799_user, ds9799_character }) => ({
    user: ds9799_user.user,
    characters: ds9799_character.characters,
    focusCharacter: ds9799_character.focusCharacter
  }),
  dispatch => ({
    onGetCharacters(id) {
      dispatch(getCharacters(id));
    },
    onSetFocusCharacter(character) {
      dispatch(setFocusCharacter(character));
    }
  })
)(VipManager);
