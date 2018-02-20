import { connect } from 'react-redux';
import DeleteModConfirm from './DeleteModConfirm.component';

import { deleteMod } from '../../Starcraft.module';

export default connect(
  ({ starcraft }) => ({
    mod: starcraft.modDetail
  }),
  dispatch => ({
    onDeleteMod(id) {
      dispatch(deleteMod(id));
    }
  })
)(DeleteModConfirm);
