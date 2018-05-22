import UserCard from './UserCard.component';
import { connect } from 'react-redux';

export default connect(({ ds9799_user, ds9799_banking, ds9799_credit }) => ({
  user: ds9799_user.user,
  zen_balance: ds9799_banking.zen_balance,
  credits: ds9799_credit.credits
}))(UserCard);
