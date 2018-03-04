import _ from 'underscore';
import { connect } from 'react-redux';
import DeleteModConfirm from './DeleteModConfirm.component';

import { deleteMod } from '../YugiohPoc.module';

export default connect(
  ({ yugiohPoc }) => ({
    mod: _.findWhere(yugiohPoc.mods, { _id: yugiohPoc.focusMod })
  }),
  dispatch => ({
    onDeleteMod(id) {
      dispatch(deleteMod(id));
    }
  })
)(DeleteModConfirm);
