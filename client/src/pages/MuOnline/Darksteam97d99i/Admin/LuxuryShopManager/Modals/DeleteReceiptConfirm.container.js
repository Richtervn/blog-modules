import { connect } from 'react-redux';
import DeleteReceiptConfirm from './DeleteReceiptConfirm.component';

import { deleteReceipt } from '../../Admin.module';

export default connect(
  ({ ds9799_admin }) => ({
    pack: ds9799_admin.focusLxReceipt
  }),
  dispatch => ({
    onDeletePackage(id) {
      dispatch(deleteReceipt(id));
    }
  })
)(DeleteReceiptConfirm);
