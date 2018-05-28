import { connect } from 'react-redux';
import DeleteConsumableConfirm from './DeleteConsumableConfirm.component';

import { deleteConsumable } from '../../Admin.module';

export default connect(
  ({ ds9799_admin }) => ({
    pack: ds9799_admin.focusLxConsumable
  }),
  dispatch => ({
    onDeletePackage(id) {
      dispatch(deleteConsumable(id));
    }
  })
)(DeleteConsumableConfirm);
