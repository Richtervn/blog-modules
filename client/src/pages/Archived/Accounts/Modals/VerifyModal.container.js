import { connect } from 'react-redux';
import VerifyModal from './VerifyModal.component';

import { verify } from '../Accounts.module';

export default connect(null, dispatch => ({
  onVerify(formBody) {
    dispatch(verify(formBody));
  }
}))(VerifyModal);
