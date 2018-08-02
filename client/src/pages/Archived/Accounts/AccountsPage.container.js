import { connect } from 'react-redux';
import AccountsPage from './AccountsPage.component';

export default connect(({ accounts }) => ({
  accounts: accounts.accounts
}))(AccountsPage);
