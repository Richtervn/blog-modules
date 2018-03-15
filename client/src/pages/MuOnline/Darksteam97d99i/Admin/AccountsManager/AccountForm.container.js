import AccountForm from './AccountForm.component';
import { connect } from 'react-redux';

import { addAccount, editAccount, deleteAccount } from '../Admin.module';

export default connect(
  ({ ds9799_admin }) => ({
    account: ds9799_admin.accountDetail
  }),
  dispatch => ({
    onAdd(formBody) {
      dispatch(addAccount(formBody));
    },
    onEdit(formBody) {
      dispatch(editAccount(formBody));
    },
    onDelete(id) {
      dispatch(deleteAccount(id));
    }
  })
)(AccountForm);
