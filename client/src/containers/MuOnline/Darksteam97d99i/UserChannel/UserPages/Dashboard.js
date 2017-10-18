import Dashboard from 'components/MuOnline/Darksteam97d99i/UserChannel/UserPages/Dashboard';
import { connect } from 'react-redux';

import { editProfile } from 'modules/MuOnline/darksteam97d99i/user';

export default connect(
  ({ ds9799_user }) => ({
    user: ds9799_user.user
  }),
  dispatch => ({
    onEditProfile(formBody) {
      dispatch(editProfile(formBody));
    }
  })
)(Dashboard);
