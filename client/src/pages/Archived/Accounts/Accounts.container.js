import { connect } from 'react-redux';
import Accounts from './Accounts.component';

export default connect(({ accounts }) => ({
  isVerify: accounts.isVerify
}))(Accounts);
