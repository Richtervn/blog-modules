import CharacterForm from './CharacterForm.component';
import { connect } from 'react-redux';

import { addCharacter, editCharacter, deleteCharacter } from '../Admin.module';

export default connect(
  ({ ds9799_admin }) => ({
    character: ds9799_admin.characterDetail
  }),
  dispatch => ({
    onAdd(formBody) {
      dispatch(addCharacter(formBody));
    },
    onEdit(formBody) {
      dispatch(editCharacter(formBody));
    },
    onDelete(id) {
      dispatch(deleteCharacter(id));
    }
  })
)(CharacterForm);
