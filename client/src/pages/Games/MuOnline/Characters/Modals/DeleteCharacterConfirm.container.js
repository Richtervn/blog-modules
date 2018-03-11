import _ from 'underscore';
import { connect } from 'react-redux';
import DeleteCharacterConfirm from './DeleteCharacterConfirm.component';

import { deleteCharacter } from '../../MuOnline.module';

export default connect(
  ({ muOnline }) => ({
    characters: _.findWhere(muOnline.characters, { _id: muOnline.focusCharacter })
  }),
  dispatch => ({
    onDeleteCharacter(id) {
      dispatch(deleteCharacter(id));
    }
  })
)(DeleteCharacterConfirm);
