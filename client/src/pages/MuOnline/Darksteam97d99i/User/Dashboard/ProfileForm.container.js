import { connect } from 'react-redux';
import ProfileForm from './ProfileForm.component';

export default connect(({ ds9799_user }) => ({
  user: ds9799_user.user
}))(ProfileForm);
