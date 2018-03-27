import { connect } from 'react-redux';
import CharactersManager from './CharactersManager.component';

import { getCharacters, getCharacterDetail, clearCharacterDetail } from '../Admin.module';

export default connect(
  ({ ds9799_admin }) => ({
    characters: ds9799_admin.characters,
    focusCharacter: ds9799_admin.characterDetail.Name
  }),
  dispatch => ({
    onGetCharacters() {
      dispatch(getCharacters());
    },
    onGetCharacterDetail(id) {
      dispatch(getCharacterDetail(id));
    },
    onClearCharacterDetail() {
      dispatch(clearCharacterDetail());
    }
  })
)(CharactersManager);
