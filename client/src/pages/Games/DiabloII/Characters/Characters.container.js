import { connect } from 'react-redux';
import Characters from './Characters.component';

import { getCharacters, getMods, searchCharacters, setFocusCharacter } from '../DiabloII.module';

export default connect(
  ({ diabloII }) => ({
    characters: diabloII.characters,
    mods: diabloII.mods
  }),
  dispatch => ({
    onGetCharacters() {
      dispatch(getCharacters());
    },
    onGetMods() {
      dispatch(getMods());
    },
    onSearchCharacters(query) {
      dispatch(searchCharacters(query));
    },
    onSetFocusCharacter(id) {
      dispatch(setFocusCharacter(id));
    }
  })
)(Characters);
