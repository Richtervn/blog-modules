import Versions from './Versions.component';
import { connect } from 'react-redux';

import { getVersions } from '../MuOnline.module';

export default connect(
  ({ muOnline }) => ({
    versions: muOnline.versions
  }),
  dispatch => ({
    onGetVersions() {
      dispatch(getVersions());
    }
  })
)(Versions);
