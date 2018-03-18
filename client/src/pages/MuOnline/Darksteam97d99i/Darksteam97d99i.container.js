import { connect } from 'react-redux';
import Darksteam97d99i from './Darksteam97d99i.component';

import { setActiveTab } from './Darksteam97d99i.module';

import { getCurrentUser } from './User/User.module';

export default connect(
  ({ ds9799_appControl, ds9799_user }) => ({
    activeTab: ds9799_appControl.activeTab
  }),
  dispatch => ({
    onSetActiveTab(tab) {
      dispatch(setActiveTab(tab));
    }
  })
)(Darksteam97d99i);
