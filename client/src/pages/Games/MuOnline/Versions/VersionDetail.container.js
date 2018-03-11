import VersionDetail from './VersionDetail.component';
import { connect } from 'react-redux';

import { getVersionDetail } from '../MuOnline.module';

export default connect(
  ({ muOnline }) => ({
    version: muOnline.versionDetail
  }),
  dispatch => ({
    onGetVersionDetail(id) {
      dispatch(getVersionDetail(id));
    }
  })
)(VersionDetail);
