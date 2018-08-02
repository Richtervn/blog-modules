import _ from 'underscore';
import { connect } from 'react-redux';
import AccountForm from './AccountForm.component';

import { add, edit } from '../Accounts.module';

export default connect(
  ({ accounts }) => ({
    account: _.findWhere(accounts.accounts, { _id: accounts.focusAccount })
  }),
  dispatch => ({
    onAdd(formBody) {
      dispatch(add(formBody));
    },
    onEdit(formBody) {
      dispatch(edit(formBody));
    }
  })
)(AccountForm);
