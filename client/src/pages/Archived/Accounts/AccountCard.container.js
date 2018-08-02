import { connect } from 'react-redux';
import AccountCard from './AccountCard.component';

import { setFocus } from './Accounts.module';

export default connect(null, dispatch => ({
  onSetFocus(id) {
    dispatch(setFocus(id));
  }
}))(AccountCard);
