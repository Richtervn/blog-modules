import UserCard from './UserCard.component';
import { connect } from 'react-redux';

export default connect(({ ds9799_user }) => ({ user: ds9799_user.user }))(UserCard);
