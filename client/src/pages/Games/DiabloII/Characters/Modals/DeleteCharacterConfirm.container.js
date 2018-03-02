import _ from 'underscore';
import { connect } from 'react-redux';
import DeleteCharacterConfirm from './DeleteCharacterConfirm.component';

import { deleteCharacter } from '../../DiabloII.module';

export default connect(
  ({ diabloII }) => ({
    character: _.findWhere(diabloII.characters, { _id: diabloII.focusCharacter })
  }),
  dispatch => ({
    onDeleteCharacter(id) {
      dispatch(deleteCharacter(id));
    }
  })
)(DeleteCharacterConfirm);
