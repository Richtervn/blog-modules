import { connect } from 'react-redux';
import ProfileForm from './ProfileForm.component';

import { editProfile } from '../User.module';

export default connect(
  ({ ds9799_user }) => ({
    user: ds9799_user.user
  }),
  dispatch => ({
    onEditProfile(formBody) {
      dispatch(editProfile(formBody));
    }
  })
)(ProfileForm);
