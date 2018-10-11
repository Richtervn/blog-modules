import { connect } from 'react-redux';
import CharactersManager from './CharactersManager.component';

import { getCharacterDetail, getCharacters, clearCharacterDetail } from '../Admin.module';

export default connect(
  ({ ds9799_admin }) => ({
    characters: ds9799_admin.characters,
    focusCharacter: ds9799_admin.characterDetail.Name
  }),
  dispatch => ({
    onGetCharacterDetail(id) {
      dispatch(getCharacterDetail(id));
    },
    onGetCharacters() {
      dispatch(getCharacters());
    },
    onClearCharacterDetail() {
      dispatch(clearCharacterDetail());
    }
  })
)(CharactersManager);
