import { connect } from 'react-redux';
import ReceiptForm from './ReceiptForm.component';

import { addReceipt, editReceipt } from '../../Admin.module';

export default connect(
  ({ ds9799_admin }) => ({
    receipt: ds9799_admin.focusLxReceipt
  }),
  dispatch => ({
    onAdd(formBody) {
      dispatch(addReceipt(formBody));
    },
    onEdit(formBody) {
      dispatch(editReceipt(formBody));
    }
  })
)(ReceiptForm);
