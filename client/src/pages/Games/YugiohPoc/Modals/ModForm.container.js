import _ from 'underscore';
import { connect } from 'react-redux';
import ModForm from './ModForm.component';

import { addMod, editMod } from '../YugiohPoc.module';

export default connect(
  ({ yugiohPoc }) => ({
    mod: _.findWhere(yugiohPoc.mods, { _id: yugiohPoc.focusMod })
  }),
  dispatch => ({
    onAddMod(formBody) {
      dispatch(addMod(formBody));
    },
    onEditMod(formBody) {
      dispatch(editMod(formBody));
    }
  })
)(ModForm);
