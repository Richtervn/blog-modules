import _ from 'underscore';
import { connect } from 'react-redux';
import CharacterForm from './CharacterForm.component';

import { addCharacter, editCharacter } from '../../MuOnline.module';

export default connect(
  ({ muOnline }) => ({
    character: _.findWhere(muOnline.characters, { _id: muOnline.focusCharacter })
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
