import { connect } from 'react-redux';
import DiabloIIDeleteModConfirm from './DiabloIIDeleteModConfirm.component';

import { deleteMod } from '../../DiabloII.module';

export default connect(
  ({ diabloII }) => ({
    mod: diabloII.modDetail
  }),
  dispatch => ({
    onDeleteMod(id) {
      dispatch(deleteMod(id));
    }
  })
)(DiabloIIDeleteModConfirm);
