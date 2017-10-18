import CharacterManager from 'components/MuOnline/Darksteam97d99i/UserChannel/UserPages/CharacterManager';
import { connect } from 'react-redux';

import {
  getCharacters,
  setFocusCharacter,
  reset,
  addPoint,
  grandReset,
  resetQuest,
  clearResetQuestError,
  clearResetError,
  clearAddPointError,
  clearGrandResetError
} from 'modules/MuOnline/darksteam97d99i/character';

export default connect(
  ({ ds9799_user, ds9799_character }) => ({
    user: ds9799_user.user,
    characters: ds9799_character.characters,
    focusCharacter: ds9799_character.focusCharacter,
    errorAddPoint: ds9799_character.errorAddPoint,
    errorReset: ds9799_character.errorReset,
    errorGrandReset: ds9799_character.errorGrandReset,
    errorResetQuest: ds9799_character.errorResetQuest
  }),
  dispatch => ({
    onGetCharacters(id) {
      dispatch(getCharacters(id));
    },
    onSetFocusCharacter(character) {
      dispatch(setFocusCharacter(character));
    },
    onReset(query) {
      dispatch(reset(query));
    },
    onAddPoint(query) {
      dispatch(addPoint(query));
    },
    onGrandReset(query) {
      dispatch(grandReset(query));
    },
    onResetQuest(query) {
      dispatch(resetQuest(query));
    },
    onClearAddPointError() {
      dispatch(clearAddPointError());
    },
    onClearGrandResetError() {
      dispatch(clearGrandResetError());
    },
    onClearResetQuestError() {
      dispatch(clearResetQuestError());
    },
    onClearResetError() {
      dispatch(clearResetError());
    }
  })
)(CharacterManager);
