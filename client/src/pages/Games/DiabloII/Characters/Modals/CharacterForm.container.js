import _ from 'underscore';
import { connect } from 'react-redux';
import CharacterForm from './CharacterForm.component';

import { addCharacter, editCharacter } from '../../DiabloII.module';

export default connect(
  ({ diabloII }) => ({
    mods: diabloII.mods,
    character: _.findWhere(diabloII.characters, { _id: diabloII.focusCharacter })
  }),
  dispatch => ({
    onAddCharacter(formBody) {
      dispatch(addCharacter(formBody));
    },
    onEditCharacter(formBody) {
      dispatch(editCharacter(formBody));
    }
  })
)(CharacterForm);
