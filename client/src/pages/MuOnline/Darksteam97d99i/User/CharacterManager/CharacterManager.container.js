import { connect } from 'react-redux';
import CharacterManager from './CharacterManager.component';

import { getCharacters, setFocusCharacter } from './Character.module';
import { getGameSetting } from '../../Darksteam97d99i.module';

export default connect(
  ({ ds9799_appControl, ds9799_user, ds9799_character }) => ({
    characters: ds9799_character.characters,
    userId: ds9799_user.user.memb___id,
    focusCharacter: ds9799_character.focusCharacter,
    gameSetting: ds9799_appControl.gameSetting
  }),
  dispatch => ({
    onGetCharacters(id) {
      dispatch(getCharacters(id));
    },
    onSetFocusCharacter(name) {
      dispatch(setFocusCharacter(name));
    },
    onGetGameSetting() {
      dispatch(getGameSetting());
    }
  })
)(CharacterManager);
